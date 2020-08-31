<template>
  <section>
    <div class="container-center mt-8">
      <ul>
        <li v-for="blog in blogData" :key="blog.title">
          <nuxt-link :to="`/rss/${blog.slug}`">{{ blog.title }}</nuxt-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const blogData = await $content('blog').only(['title', 'slug']).fetch()
    return { blogData };
  }
}
</script>