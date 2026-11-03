import { mkdtemp, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { resolve } from "node:path";
import { afterEach, describe, expect, it, vi } from "vitest";
import { exportStaticSite, staticPages } from "../../scripts/static-site.mjs";

const temporaryRoots: string[] = [];

async function fixture() {
  const root = await mkdtemp(resolve(tmpdir(), "arabic-static-export-"));
  temporaryRoots.push(root);
  for (const page of staticPages) {
    const directory = resolve(root, "dist/client", `.${page}`);
    await mkdir(directory, { recursive: true });
    await writeFile(resolve(directory, "index.html"), "<!doctype html><html><body>Page</body></html>");
  }
  await mkdir(resolve(root, "dist/client/assets"), { recursive: true });
  await writeFile(resolve(root, "dist/client/assets/site.js"), "export {};");
  return root;
}

afterEach(async () => {
  vi.unstubAllGlobals();
  await Promise.all(temporaryRoots.splice(0).map((root) => rm(root, { recursive: true, force: true })));
});

describe("Static Apache export", () => {
  it("exports index.html, all six public pages and assets into one folder without server files", async () => {
    const root = await fixture();
    await mkdir(resolve(root, "dist/server"), { recursive: true });
    await writeFile(resolve(root, "dist/server/index.js"), "server only");
    await mkdir(resolve(root, "dist/client/.lovable"));
    await writeFile(resolve(root, "dist/client/.lovable/output.json"), "{}");
    const destination = await exportStaticSite(root);
    expect(destination).toBe(resolve(root, "dist/static"));
    expect(staticPages).toEqual(["/", "/about", "/contact", "/methodology", "/red-teaming", "/services"]);
    for (const page of staticPages) {
      expect(await readFile(resolve(destination, `.${page}`, "index.html"), "utf8")).toContain("<!doctype html>");
    }
    expect(await readFile(resolve(destination, "assets/site.js"), "utf8")).toBe("export {};");
    const entries = await readdir(destination);
    expect(entries).not.toContain("server");
    expect(entries).not.toContain(".lovable");
    expect(await readFile(resolve(destination, ".htaccess"), "utf8")).toBe("DirectoryIndex index.html\n");
  });

  it("refuses to export when a public page has not been prerendered", async () => {
    const root = await fixture();
    await rm(resolve(root, "dist/client/contact/index.html"));
    await expect(exportStaticSite(root)).rejects.toThrow();
  });

  it("includes hosted image bytes at their existing URLs for Apache", async () => {
    const root = await fixture();
    const url = "/__l5e/assets-v1/example-id/logo.svg";
    await writeFile(resolve(root, "dist/client/assets/site.js"), `const logo = "${url}";`);
    const download = vi.fn().mockResolvedValue(new Response("<svg></svg>", { headers: { "content-type": "image/svg+xml" } }));
    vi.stubGlobal("fetch", download);
    const destination = await exportStaticSite(root);
    expect(download).toHaveBeenCalledWith(`https://arabic-ai-quality-lens.lovable.app${url}`);
    expect(await readFile(resolve(destination, `.${url}`), "utf8")).toBe("<svg></svg>");
  });
});