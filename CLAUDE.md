# macivor

Company site for MacIvor Technical LLC (macivortech.com). Astro, static
output, hosted on Netlify (`netlify.toml`). Sole owner: James MacIvor; copy
uses "I".

## Read first

`ai_policy.md`. Text that human visitors read is not AI-generated, apart from
the exceptions it lists (accessibility text and microcopy, legal copy,
translations, minor spelling/grammar and broken-link fixes). Otherwise leave a
`<!-- TODO(james): copy: ... -->` placeholder and flag problems instead of
writing or rewriting prose. Page metadata (`<title>`, meta description, social
card text) is human-written. Commits, PR descriptions, docs, `llms.txt`,
structure and code are fine to write.

## Layout

- `src/pages/`: routes. `blog/[slug].md.ts`, `resume.md.ts` and `llms.txt.ts`
  emit the Markdown twins and `llms.txt` at build time.
- `src/layouts/`, `src/components/`: shared layout, nav, footer, page header.
- `src/site.ts`: site-wide strings (brand name, home title, default description,
  legal name). Human-facing, so James writes them; empty values are omitted.
- `src/styles/global.css`, `tailwind.config.cjs`: the design system (Tailwind 3).
- `src/content.config.ts`: `blog`, `resume` and `pages` collections, read from `content/`.
- `content/pages/`: about, contact, ai-policy and the home body. Prose, `title`,
  `description` and `navLabel` are James's to write; `draft: true` (the
  default) keeps a page out of production builds and the nav. A published
  page with no title fails the build.
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
