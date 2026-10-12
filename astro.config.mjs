import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import { unified } from '@astrojs/markdown-remark'
import rehypePictureWrapper from './src/lib/rehype-picture-wrapper.mjs'

export default defineConfig({
  site: 'https://www.macivortech.com',
  integrations: [sitemap()],
  markdown: {
    processor: unified({ rehypePlugins: [rehypePictureWrapper] }),
  },
})
