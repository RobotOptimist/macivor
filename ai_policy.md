# AI policy (working document)

Internal, repo-facing. This is not the public `/ai-policy` page, which is
human-facing copy and is written by James. This file defines what AI agents
may and may not do in this repo. Agents working here should read it first.

## The rule

The test is **who the text is for**.

- Text for **humans visiting the site** must not be AI-generated. Ever.
- Text for **agents or developers** (this repo's tooling, other LLMs, crawlers
  that want machine-readable context) may be AI-generated.
- **Structure and code** may be AI-generated, regardless of what they render.
- **Artwork** is never AI-generated.

## Allowed for AI

| Category | Examples |
|---|---|
| Repo-consumed text | Commit messages, PR descriptions, READMEs, technical docs, code comments, this file |
| Agent-consumed text | `llms.txt`, markdown twins meant for agents (see open questions), structured-data plumbing |
| Structure and code | Page structure, components, layouts, routing, build config, redirects, CSS, accessibility structure (landmarks, heading hierarchy) |
| Review work | Pointing out factual inconsistencies, stale details, broken links, tone or clarity problems, missing information. Flagging, not rewriting |
| Mechanical checks | Link checks, image inventories, dependency or content audits |

## Not allowed for AI

| Category | Examples |
|---|---|
| Visitor-facing prose | Home, About, Contact, `/ai-policy`, blog posts, the new stock-market-replay series, any new section or sentence a visitor reads |
| Visitor-facing microcopy | Headings, nav labels, button labels, link text, calls to action, error and empty-state messages, footer text |
| Rewrites of James' existing prose | Resume text, existing blog posts. Fix links and formatting, but do not rephrase, "improve" or modernize wording without being asked |
| Artwork | Logo variants, hero images, illustrations, icons, photos. The logo is a professional commission; use the supplied files only |

## What agents do instead when copy is needed

1. **Leave a placeholder, not plausible text.** Use an obvious marker that
   cannot ship by accident, for example:
   `<!-- TODO(james): copy: <what this slot is for, who reads it, length> -->`
   Do not fill slots with lorem ipsum or "temporary" real-sounding sentences.
2. **Describe the slot.** State its purpose, audience, constraints (length,
   must link to X) so James can write it quickly.
3. **Flag issues rather than fix them.** If existing copy has a factual
   problem, an inconsistency with another page, or an unverifiable claim,
   report it with the file and line. Do not edit the prose.
4. **Do not generate in chat either**, as drafts "for inspiration". Proposed
   wording tends to end up in the final text.

## Decisions

- **Metadata** (`<title>`, meta description, OpenGraph, JSON-LD descriptions,
  image alt text) is human-facing: James writes it. Exception: accessibility
  outranks this policy. Where WCAG needs alt text, labels or similar and James
  has not supplied it, an agent may write it, marked for human review in the
  PR. Decorative images get `alt=""`. The goal is to satisfy both; accessibility
  wins if they conflict.
- **Markdown twins** (`/about.md` and so on) may carry extra text for agents,
  where it helps an agent curating information for a human. Decided case by
  case, and the extra text should be called out in the PR.
- **Proofreading.** Agents proofread human-facing copy. They flag anything
  that is factually inaccurate, inconsistent with another page or the resume,
  or that changes meaning, and wait for a human decision. They do not rewrite.

## Open questions

- **Typos.** Can agents apply pure spelling and punctuation fixes, or must
  every proofreading finding be flagged?
- **Product site.** The terms and privacy policy at stock-market-replay.com
  are outside this repo, but are human-facing copy; confirm they follow the
  same rule so the public `/ai-policy` page stays accurate.
- **Existing assets.** Provenance of current images (blog hero images,
  `static/` memes, `jackolanterns.jpg`) is unaudited.
- **Pruned blog.** 13 posts were removed (including the AI-generated
  `upgrading-from-nuxt-2-to-nuxt-3` and `take-a-look-at-mlnet`). Three remain
  published: `assumptions-of-linear-regression` (keep), and
  `how-i-got-started` and `the-cure-for-impostor-syndrome` (James rewriting
  voice and perspective).
- **Parked.** The three `mlnet-v-python-*` posts live in `content/_parked/`,
  outside the `blog` collection, so they are not built or published. They
  contain dangling links to removed posts and pinned 2020 ML.NET/Binder
  tooling; James may consolidate and rewrite them later.

## Review flags for existing content

Raise these for James, do not fix them:

- References to former clients or employers (SafeRx Solutions, HMB, Nationwide,
  Sogeti, OCLC, Rhyme). James has permission from the SafeRx owners to discuss
  it, but the test is how a prospective client reads it: does it look like
  inside baseball?
- Named individuals, or descriptions of a named company's conduct.
- Statements about regulated data (patient or prescription data) that could
  read as a compliance claim.
- Dates, titles or employment spans that disagree between the resume, About
  page and blog posts.

## Related

- `.cursorrules` holds general agent behavior rules. It does not yet reference
  this file.
- Public `/ai-policy` page: not yet created; James writes it.
