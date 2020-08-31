<template>
  <article>
     <nuxt-content :document="page" />
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
        const page = await $content(`blog/${params.blog}`).fetch()
        return {
            page
        }
    },
    layout: 'rss'
}
</script>