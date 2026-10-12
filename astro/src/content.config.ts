import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

// Reads the same Markdown the Nuxt site uses; nothing is copied.
const blog = defineCollection({
  loader: glob({ pattern: '*.md', base: '../content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    image: z.string().optional(),
    alttext: z.string().optional(),
  }),
})

const resume = defineCollection({
  loader: glob({ pattern: '*.md', base: '../content/resume' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.string().optional(),
  }),
})

export const collections = { blog, resume }
