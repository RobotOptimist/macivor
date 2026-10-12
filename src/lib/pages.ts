import { getCollection, type CollectionEntry } from 'astro:content'

export type PageEntry = CollectionEntry<'pages'>

// Drafts show in `astro dev` and are left out of production builds.
export function isVisible(page: PageEntry): boolean {
  return !page.data.draft || import.meta.env.DEV
}

export async function getVisiblePages(): Promise<PageEntry[]> {
  return (await getCollection('pages')).filter(isVisible)
}

// A published page must carry a human-written title, so a skeleton cannot ship blank.
export function assertPublishable(page: PageEntry): void {
  if (!page.data.draft && !page.data.title.trim()) {
    throw new Error(`content/pages/${page.id}.md is published (draft: false) but has no title`)
  }
}
