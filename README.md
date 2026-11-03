# Arabic Ai Quality Lens

I want to build a website for the company (Arabic AI Quality) domain and histing is already available on Hostinger. The tagline of the company is (Arabic LLMs measured with care). The concept is for an independent Arabic AI and Arabic LLM evaluation consultancy services company in the UAE. Take the below two versions of proposed website content, read them, analyze them and come up with one consolidated website content version to help you start coding and building the website. I have attached test report made for evaluating 3 Arabic LLMs you can take screenshots from it and use them in the website. I have attached the methodology document so you can use the same futuristic look and feel of the report in the website design elements. Don’t include social media icons or handles. No videos to be used in the background rather AI and tech design elements. The file (Arabic AI Quality — Website Content (Draft 1)) is preferred, but take whatever missing or deemed necessary from the other file (GPT Website content). For Contact us page, mention the company email to be: ai@ArabicAiQuality.com and add only a WhatsApp icon linking it to the phone number +971557465252
You can use as a reference website in style: About Bayanat Labs — Arabic Data Company in Riyadh
You can use as a reference website in DESGIN REFERENCE AIQ | Using Data to Drive Energy Transition

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/5197024d-c6c9-4f5b-960d-e4b36d1c24c4).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Static hosting on Apache / Hostinger

After installing dependencies with `npm install`, run from the project root:

```sh
npm run build
```

The complete upload folder is **`dist/static/`** (relative to the project root).
Upload its contents, including `.htaccess`, into Hostinger's `public_html/`.
It contains `index.html`, `assets/`, the public files, and prerendered HTML
for `/about`, `/contact`, `/methodology`, `/red-teaming`, and `/services`.
Apache serves the page directories directly; no SPA rewrite or Node server is needed.
Host the site at the domain root, not a subfolder. Keep hidden files enabled in
your upload tool so `.htaccess` is included.

The framework uses a server **during the build** to generate HTML, but the
uploaded `dist/static/` contains no server runtime. Do not upload `dist/server/`
or the whole `dist/` directory. The export fails if any listed page is missing.

The Lovable preview and `npm run dev` remain unchanged. No styling, content,
animation, navigation, or contact features are changed by the export.
There are no application server functions, API routes, or server-side secrets;
the contact form opens an email draft rather than sending via a server.
Email/WhatsApp links and external Google Fonts still require their respective
apps/services, just as they do in the preview.

When adding a public content page, add its path to `staticPages` in
`scripts/static-site.mjs` so the next build exports it too.
