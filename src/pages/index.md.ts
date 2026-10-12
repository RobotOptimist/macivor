// Markdown twin of the home page, served at /index.md
import type { APIRoute } from 'astro'
import { getEntry } from 'astro:content'

export const GET: APIRoute = async ({ site }) => {
  const home = await getEntry('pages', 'home')
  const body = [
    '# MacIvor Technical LLC',
    '',
    `Canonical: ${new URL('/', site)}`,
    '',
    home && !home.data.draft ? home.body ?? '' : '',
  ].join('\n')
  return new Response(body, { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } })
}
