<template>
  <article>
     <nuxt-content :document="page" />
  </article>
</template>

<script>
export default {
  head() {
    return {
      title: this.page.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page.description
        },
      ],
    }
  },
  async asyncData({ $content, params }) {
        const page = await $content(`blog/${params.blog}`).fetch()
        return {
            page
        }
    }
}
</script>