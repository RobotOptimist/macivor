import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

// Markdown lives in content/ at the repo root. Files in content/_parked are not loaded.
const blog = defineCollection({
  loader: glob({ pattern: '*.md', base: './content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    image: z.string().optional(),
    alttext: z.string().optional(),
  }),
})

const resume = defineCollection({
  loader: glob({ pattern: '*.md', base: './content/resume' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.string().optional(),
  }),
})

// Standalone pages (about, contact, ai-policy, home body). James writes the
// prose, title and nav label; pages stay hidden from the build until `draft: false`.
const pages = defineCollection({
  loader: glob({ pattern: '*.md', base: './content/pages' }),
  schema: z.object({
    title: z.string().default(''),
    description: z.string().default(''),
    navLabel: z.string().default(''),
    navOrder: z.number().default(50),
    draft: z.boolean().default(true),
  }),
})

export const collections = { blog, resume, pages }
