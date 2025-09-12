import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      // Specify the type of content in this collection
      type: 'page',
      // Load every file inside the `content/blog` directory
      source: 'blog/**',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string(),
        image: z.string(),
        alttext: z.string(),
        path: z.string(),
      })
    }),
    resume: defineCollection({
      // Specify the type of content in this collection
      type: 'page',
      // Load every file inside the `content/resume` directory
      source: 'resume/**',
      schema: z.object({
        title: z.string(),
        path: z.string(),
      })
    })
  }
})