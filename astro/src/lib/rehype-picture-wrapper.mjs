// Posts embed <picture-wrapper file-name="..." alt-text="..."> (a Nuxt component).
// Replace each with a plain <img> served from /img (copied from the repo's static/
// folder: these IDs 404 on Cloudinary, so the Nuxt site's images are broken today).
// Astro keeps raw HTML in Markdown as `raw` nodes, so match on the string.
const TAG = /<picture-wrapper\b([^>]*)>\s*(?:<\/picture-wrapper>)?/g

function attr(attrs, name) {
  const m = attrs.match(new RegExp(`${name}="([^"]*)"`))
  return m ? m[1] : ''
}

function toImg(attrs) {
  const id = attr(attrs, 'file-name')
  const ext = attr(attrs, 'file-extension') || 'png'
  const alt = attr(attrs, 'alt-text')
  const src = `/img/${id}.${ext}`
  return `<img src="${src}" alt="${alt}" loading="lazy" class="mx-auto my-4 max-h-128">`
}

function walk(node) {
  if (node.type === 'raw' && typeof node.value === 'string' && node.value.includes('<picture-wrapper')) {
    node.value = node.value.replace(TAG, (_, attrs) => toImg(attrs))
  }
  if (node.children) node.children.forEach(walk)
}

export default function rehypePictureWrapper() {
  return (tree) => walk(tree)
}
