<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->
- Site pages share header/footer/section components in src/components/site and page data in src/content/data.ts — keeps content edits in one place.
- UAE context is a home-only section component; temporarily hidden page source is archived outside src/routes so it is not publicly routable and can be restored later.
- Prerender every public content route listed in scripts/static-site.mjs and export only dist/client into dist/static after the build; Apache needs only HTML/assets while Lovable retains its normal development/server pipeline.
- Scroll-driven numeric and bar animations use shared Framer Motion components with one-shot visibility and bounded targets, keeping data and accessibility intact.
- Analytics uses the connector's public browser Measurement ID and tracks route changes client-side so static Apache hosting needs no server.
