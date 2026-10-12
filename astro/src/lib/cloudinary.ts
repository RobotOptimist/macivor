// Cloud name is the same value nuxt.config.js falls back to.
const CLOUD = 'macivortech'

export function cloudinaryUrl(publicId: string, width?: number): string {
  const t = ['f_auto', 'q_auto', width ? `w_${width}` : null].filter(Boolean).join(',')
  return `https://res.cloudinary.com/${CLOUD}/image/upload/${t}/v1/${publicId}`
}
