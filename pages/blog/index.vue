<template>
  <section>
    <page-header title="Blog" />
    <div class="container-center mt-8">
      <ul>
        <li v-for="blog in blogs" :key="blog.title">
          <nuxt-link :to="`/blog/${blog.slug}`">{{ `${blog.date.toLocaleDateString()} - ${blog.title}` }}</nuxt-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import pageHeader from "~/components/page-header"
export default {
    components: {
        pageHeader
    },
    head() {
      return {
        title: 'James MacIvor\'s Blog Index',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: "A list of my blogs",
          },
        ],
      }
  },
  async asyncData({ $content }) {
    const blogData = await $content('blog').only(['title', 'slug', 'date']).fetch();        
    const blogs = blogData.map(b => {
      b.date = new Date(b.date);
      return b;
    }).sort((a,b) => b.date - a.date);
    return { blogs };
  }
}
</script>