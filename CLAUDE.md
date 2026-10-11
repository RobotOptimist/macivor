# macivor

Company site for MacIvor Technical LLC (macivortech.com). Nuxt 3, static
generation, hosted on Netlify. Sole owner: James MacIvor; copy uses "I".

## Read first

`ai_policy.md`. Text that human visitors read must never be AI-generated.
Leave `<!-- TODO(james): copy: ... -->` placeholders and flag problems
instead of writing or rewriting prose. Commits, PR descriptions, docs,
`llms.txt`, structure and code are fine to write. Fixing typos and grammar
in existing copy is allowed when meaning is preserved.

## Layout

- `pages/`, `components/`, `layouts/`: Vue pages and components.
- `content/blog/`: the published `blog` collection (`content.config.ts`).
- `content/resume/`: the `resume` collection.
- `content/_parked/`: posts outside any collection; not built or published.
- `public/`: files served at the site root (Nuxt 3). `static/` is a Nuxt 2
  leftover and is not served unless something copies it.

## Commands

- `npm run dev`: dev server.
- `npm run build` (`nuxi generate`): static build to `.output/public`.

## Notes

- Blog images are Cloudinary public IDs, rendered by `components/picture-wrapper.vue`.
- Context for planning: GitHub issue RobotOptimist/macivor#84.
