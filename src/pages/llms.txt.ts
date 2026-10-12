// llms.txt (llmstxt.org format). Agent-facing text; facts below are drawn from
// the repo and conversation notes and need James's review before launch.
import type { APIRoute } from 'astro'
import { getCollection } from 'astro:content'

export const GET: APIRoute = async ({ site }) => {
  const posts = (await getCollection('blog')).sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime(),
  )
  const abs = (p: string) => new URL(p, site).toString()
  const lines = [
    '# MacIvor Technical LLC',
    '',
    '> Sole-owner software company run by James MacIvor in Columbus, Ohio (LLC formed 2018). Builds stock-market-replay (https://stock-market-replay.com). Every page below has a Markdown twin at the same path with a .md extension.',
    '',
    '## Pages',
    '',
    `- [Resume](${abs('/resume.md')}): James MacIvor's full resume`,
    '',
    '## Blog',
    '',
    ...posts.map((p) => `- [${p.data.title}](${abs(`/blog/${p.id}.md`)}): ${p.data.description}`),
    '',
    '## Contact',
    '',
    '- james@macivortech.com',
    '',
  ]
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}
