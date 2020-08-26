<template lang="md">
  <article>
    <nuxt-content :document="page" />
  </article>
</template>

<script>
import pageHeader from '~/components/page-header'
import pictureWrapper from '~/components/picture-wrapper.vue'
export default {
  components: {
    pageHeader,
    pictureWrapper,
  },
  head() {
    return {
      title: 'Blog: The Cure For Imposter Syndrome',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "A description of Imposter Syndrome and how to overcome it.",
        },
      ],
    }
  },
  async asyncData({ $content }) {
        const page = await $content('blogs/the-cure-for-imposter-syndrome').fetch()
        return {
            page
        }
    }
}
</script>