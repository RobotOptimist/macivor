// Markdown twin of each post, served at /blog/<slug>.md
import type { APIRoute, GetStaticPaths } from 'astro'
import { getCollection } from 'astro:content'

export const getStaticPaths = (async () => {
  const posts = await getCollection('blog')
  return posts.map((post) => ({ params: { slug: post.id }, props: { post } }))
}) satisfies GetStaticPaths

export const GET: APIRoute = ({ props, site }) => {
  const { post } = props as { post: Awaited<ReturnType<typeof getCollection<'blog'>>>[number] }
  const url = new URL(`/blog/${post.id}`, site)
  const body = [
    `# ${post.data.title}`,
    '',
    `Published: ${post.data.date.toISOString().slice(0, 10)}`,
    `Canonical: ${url}`,
    '',
    post.body ?? '',
  ].join('\n')
  return new Response(body, { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } })
}
