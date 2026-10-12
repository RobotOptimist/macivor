// Markdown twin of each standalone page, served at /<page>.md
import type { APIRoute, GetStaticPaths } from 'astro'
import { assertPublishable, getVisiblePages, type PageEntry } from '../lib/pages'

export const getStaticPaths = (async () => {
  const pages = (await getVisiblePages()).filter((p) => p.id !== 'home')
  return pages.map((page) => ({ params: { page: page.id }, props: { page } }))
}) satisfies GetStaticPaths

export const GET: APIRoute = ({ props, site }) => {
  const page = props.page as PageEntry
  assertPublishable(page)
  const body = [`# ${page.data.title}`, '', `Canonical: ${new URL(`/${page.id}`, site)}`, '', page.body ?? ''].join('\n')
  return new Response(body, { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } })
}
