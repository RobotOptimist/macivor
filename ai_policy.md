# AI policy (working document)

Internal, repo-facing. This is not the public `/ai-policy` page
(`content/pages/ai-policy.md`), which is human-facing copy written by James and
is the authority. This file records how that policy applies to agents working
in this repo. Read it first.

Last synced with the public page: 2026-10-13.

## The spirit

Strip away the specifics and the point is this: **a human writes meaningful,
substantive copy that people want to read.** Where this document is silent or
ambiguous, resolve it by that. Mechanical, structural and boilerplate work is
fair game for AI; the writing a reader came for is not.

## The rule

The test is **who the text is for**.

- Text for **humans visiting the site** is not AI-generated, apart from the
  exceptions below.
- Text for **agents or developers** (repo tooling, other LLMs, crawlers that
  want machine-readable context) may be AI-generated.
- **Structure and code** may be AI-generated, regardless of what they render.
- **Images and video** are never AI-generated.

### Exceptions for human-facing copy

These match the public page.

1. **Accessibility text:** alt text, aria properties and other screen-reader
   and assistive-technology text. An agent-written value is marked for human
   review in the PR.
2. **Microcopy:** buttons, labels, navigation and similar short UI text, as
   opposed to substantive copy a content writer would be hired for. James has
   said agents may fill it in as needed (2026-10-13). Page `title`,
   `description` and `navLabel` frontmatter, and `src/site.ts`, remain his.
3. **Legal copy**, such as terms of service and privacy policies.
4. **Translations** of human-written copy.
5. **Minor spelling and grammar fixes, and broken links**, provided meaning is
   preserved. Anything that would require rephrasing is flagged instead.
6. **Media processing:** resize, re-encode, crop, modify metadata or
   composite supplied media. The test is meaning: processing that leaves the
   asset's meaning unchanged is allowed; an edit that would change its meaning
   may be suggested but not applied.

## Allowed for AI

| Category | Examples |
|---|---|
| Repo-consumed text | Commit messages, PR descriptions, READMEs, technical docs, code comments, this file |
| Agent-consumed text | `llms.txt`, markdown twins meant for agents, metadata plumbing for bots |
| Structure and code | Page structure, components, layouts, routing, build config, redirects, CSS, accessibility structure (landmarks, heading hierarchy) |
| Review work | Pointing out factual errors, stale information, inconsistencies, missing detail against a human outline. Flagging, not fixing |
| Conversation about prose | Discussing wording, flow and clarity of James's drafts in chat, and helping with awkward wording when asked. James chooses and writes the final text |
| Mechanical checks | Link checks, image inventories, dependency or content audits |
| Mechanical processing of supplied artwork | Resize, re-encode, crop, strip metadata, composite on a plain background. The form and meaning of the asset are unchanged (exception 6) |

## Not allowed for AI

| Category | Examples |
|---|---|
| Visitor-facing prose | Home, About, Contact, `/ai-policy`, blog posts, the stock-market-replay series, any new section or sentence a visitor reads |
| Page metadata | `<title>`, meta description, OpenGraph and social card text, JSON-LD descriptions: if a human can read it, a human writes it (James) |
| Rewrites of James' existing prose | Resume text, existing blog posts. Fix links, formatting, typos; do not rephrase or modernize without being asked |
| Images and video | Logo variants, hero images, illustrations, icons, photos. The logo is a professional commission; use the supplied files only |

## What agents do instead when copy is needed

1. **Leave a placeholder, not plausible text**, such as
   `<!-- TODO(james): copy: <what this slot is for, who reads it, length> -->`.
   Do not fill slots with lorem ipsum or "temporary" real-sounding sentences.
2. **Describe the slot** once told its purpose: audience, constraints (length,
   must link to X).
3. **Flag issues rather than fix them**, with file and line: factual problems,
   inconsistencies with another page, unverifiable claims, stale information.
4. **Wording help is welcome when asked** (James, 2026-10-13): a better way to
   put an awkward sentence, options to choose from. Do not volunteer drafted
   copy unprompted, and do not write whole sections or pages. James picks and
   writes the final text.

## Decisions

- **Metadata** is human-written (above). The accessibility exception applies
  where WCAG needs alt text or labels and James has not supplied them.
- **Markdown twins** (`/about.md` and so on) may carry extra text for agents
  where it helps an agent curating information for a human. Decided case by
  case, and called out in the PR.
- **Proofreading.** Agents proofread human-facing copy and flag anything
  factually inaccurate, inconsistent with another page or the resume, or
  meaning-changing, then wait for a human decision.
- **Product site.** The terms and privacy policy at stock-market-replay.com
  were AI-generated under the legal-copy exception, with no professional
  review (James's decision, given the cost and no revenue).
- **Translations.** The site will become multilingual; agents may translate
  human-written copy. No translated content exists yet.

## Open questions

- **Asset provenance.** Origin of existing images (blog heroes, `static/`
  memes, `jackolanterns.jpg`) is unaudited.

## Review flags for existing content

Raise these for James, do not fix them:

- References to former clients or employers (SafeRx Solutions, HMB, Nationwide,
  Sogeti, OCLC, Rhyme). James has permission from the SafeRx owners to discuss
  it; the test is how a prospective client reads it.
- Named individuals, or descriptions of a named company's conduct.
- Statements about regulated data (patient or prescription data) that could
  read as a compliance claim.
- Dates, titles or employment spans that disagree between the resume, About
  page and blog posts.

## Related

- `.cursorrules` (rule 27) and `CLAUDE.md` point agents at this file.
- Published posts: `assumptions-of-linear-regression`, `how-i-got-started` and
  `the-cure-for-impostor-syndrome` (James rewriting the latter two).
  `content/_parked/` holds unpublished posts.
