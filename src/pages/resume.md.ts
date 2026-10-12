import type { APIRoute } from 'astro'
import { getEntry } from 'astro:content'

export const GET: APIRoute = async ({ site }) => {
  const entry = await getEntry('resume', 'resume_doc')
  const body = [`Canonical: ${new URL('/resume', site)}`, '', entry?.body ?? ''].join('\n')
  return new Response(body, { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } })
}
