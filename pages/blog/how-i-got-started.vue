<template>
  <article>
     <nuxt-content :document="page" />
  </article>
</template>

<script>
export default {
  head() {
    return {
      title: 'Blog: How I Got Started As A Software Developer',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "A short story of how I got my start along with advice and links for anyone else.",
        },
      ],
    }
  },
  async asyncData({ $content }) {
        const page = await $content('blogs/how-i-got-started').fetch()
        return {
            page
        }
    }
}
</script>