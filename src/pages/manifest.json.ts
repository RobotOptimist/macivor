import type { APIRoute } from 'astro'
import { site } from '../site'

export const GET: APIRoute = () => {
  const manifest = {
    name: site.name || site.homeTitle,
    short_name: site.name || 'MacIvor',
    start_url: '/',
    display: 'standalone',
    background_color: site.themeColor,
    theme_color: site.themeColor,
    icons: [
      { src: '/android-icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { src: '/apple-icon-180x180.png', sizes: '180x180', type: 'image/png' },
      { src: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { src: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { src: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
  }
  return new Response(JSON.stringify(manifest, null, 2), {
    headers: { 'Content-Type': 'application/manifest+json; charset=utf-8' },
  })
}
