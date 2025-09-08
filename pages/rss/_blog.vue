<template>
  <article v-if="page && page.title">
     <page-header :title="page.title"></page-header>
    <div class="container-center">
      <picture-wrapper :legacy="false" 
        :file-name="page.image" 
        :alt-text="page.alttext" 
        classes="max-h-128">
      </picture-wrapper>
      <div class="article-container mt-4">
        <nuxt-content :document="page" />
      </div>
    </div>
  </article>
  <article v-else>
    <page-header title="Loading..."></page-header>
    <div class="container-center">
      <p>Loading RSS article...</p>
    </div>
  </article>
</template>

<script>
export default {
  head() {
    return {
      title: (this.page && this.page.title) ? this.page.title : 'RSS Article',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: (this.page && this.page.description) ? this.page.description : ''
        },
      ],
    }
  },
  async asyncData({ $content, params }) {
        const page = await $content(`blog/${params.blog}`).fetch()
        return {
            page
        }
    },
    layout: 'rss'
}
</script>