# macivor

Company site for MacIvor Technical LLC (macivortech.com). Astro, static
output, hosted on Netlify (`netlify.toml`). Sole owner: James MacIvor; copy
uses "I".

## Read first

`ai_policy.md`. Text that human visitors read must never be AI-generated.
Leave `<!-- TODO(james): copy: ... -->` placeholders and flag problems
instead of writing or rewriting prose. Commits, PR descriptions, docs,
`llms.txt`, structure and code are fine to write. Fixing typos and grammar
in existing copy is allowed when meaning is preserved.

## Layout

- `src/pages/`: routes. `blog/[slug].md.ts`, `resume.md.ts` and `llms.txt.ts`
  emit the Markdown twins and `llms.txt` at build time.
- `src/layouts/`, `src/components/`: shared layout, nav, footer, page header.
- `src/styles/global.css`, `tailwind.config.cjs`: the design system (Tailwind 3).
- `src/content.config.ts`: `blog` and `resume` collections, read from `content/`.
- `content/blog/`, `content/resume/`: published Markdown. `content/_parked/`
  is not loaded.
- `src/assets/`: images processed by `astro:assets`. Hero images are matched
  to a post's frontmatter `image` by file basename (`src/assets/heroes/`).
- `public/`: served as is (icons, `_redirects`, `manifest.json`, `img/` for
  images embedded in post bodies).
- `src/lib/rehype-picture-wrapper.mjs`: rewrites legacy `<picture-wrapper>`
  tags in post bodies to `<img src="/img/...">`.

## Commands

- `npm run dev`, `npm run build` (output `dist/`), `npm run preview`.

## Notes

- If you change Markdown plugin config and output looks stale, delete `.astro/`
  and `node_modules/.astro/` (the content cache is not invalidated).
- Context for planning: GitHub issue RobotOptimist/macivor#84.
