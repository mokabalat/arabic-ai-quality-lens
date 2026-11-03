import { cp, mkdir, readFile, readdir, rm, stat, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

export const staticPages = ["/", "/about", "/contact", "/methodology", "/red-teaming", "/services"];

async function listFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map((entry) => {
    const path = resolve(directory, entry.name);
    return entry.isDirectory() ? listFiles(path) : [path];
  }));
  return files.flat();
}

// Preserve existing image URLs, but include their bytes so Apache serves them locally.
async function includeHostedAssets(destination) {
  const urls = new Set();
  for (const file of await listFiles(destination)) {
    if (!/\.(?:html|js|css|json)$/.test(file)) continue;
    const contents = await readFile(file, "utf8");
    for (const match of contents.matchAll(/\/__l5e\/assets-v1\/[a-zA-Z0-9-]+\/[a-zA-Z0-9._%()-]+/g)) {
      urls.add(match[0]);
    }
  }
  for (const url of urls) {
    const response = await fetch(`https://arabic-ai-quality-lens.lovable.app${url}`);
    if (!response.ok || response.headers.get("content-type")?.includes("text/html")) {
      throw new Error(`Cannot include website image ${url}: HTTP ${response.status}`);
    }
    const path = resolve(destination, `.${url}`);
    await mkdir(resolve(path, ".."), { recursive: true });
    await writeFile(path, new Uint8Array(await response.arrayBuffer()));
  }
}

// Only this directory is uploaded to Apache; build-time server files stay outside it.
export async function exportStaticSite(projectRoot = process.cwd()) {
  const source = resolve(projectRoot, "dist/client");
  const destination = resolve(projectRoot, "dist/static");

  for (const page of staticPages) {
    const htmlPath = resolve(source, `.${page}`, "index.html");
    const html = await readFile(htmlPath, "utf8");
    if (!/<html[\s>]/i.test(html) || !/<\/html>/i.test(html)) {
      throw new Error(`Static export requires complete prerendered HTML for ${page}`);
    }
  }
  if (!(await stat(resolve(source, "assets"))).isDirectory()) {
    throw new Error("Static export requires the compiled assets directory.");
  }

  await rm(destination, { recursive: true, force: true });
  await mkdir(destination, { recursive: true });
  await cp(source, destination, {
    recursive: true,
    filter: (path) => ![".lovable", "server", "node_modules"].some((name) => path.split(/[\\/]/).includes(name)),
  });
  await includeHostedAssets(destination);
  await writeFile(resolve(destination, ".htaccess"), "DirectoryIndex index.html\n");
  console.info("Static website exported to dist/static (upload this folder's contents to public_html).");
  return destination;
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  await exportStaticSite();
}