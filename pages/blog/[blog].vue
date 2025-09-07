<template>
  <article v-if="page">
    <page-header :title="page.title"></page-header>
    <div class="container-center">
      <picture-wrapper v-if="page.image" :legacy="false" 
        :file-name="page.image" 
        :alt-text="page.alttext" 
        classes="max-h-128">
      </picture-wrapper>
      <div class="article-container mt-4">
        <ContentRenderer :value="page" />
      </div>
    </div>
  </article>
  <div v-else>
    <page-header title="Loading..."></page-header>
    <div class="container-center">
      <p>Loading blog post...</p>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const { data: page, error } = await useAsyncData(route.path, () => {
  return queryCollection('blog')
    .path(route.path)
    .first()
})

if (error.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Blog post not found'
  })
}

useHead({
  title: page.value?.title || 'Blog Post',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: page.value?.description || ''
    },
  ],
})
</script>