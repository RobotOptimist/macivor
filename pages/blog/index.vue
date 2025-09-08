<template>
  <section>
    <page-header title="Blog" />
    <div class="container-center mt-8">
      <ul>
        <li v-for="blog in blogData" :key="blog.title">
          <NuxtLink :to="blog.path">{{ blog.title }}</NuxtLink>
          <p>{{ blog.date }}</p>
          <p>{{ blog.description }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import pageHeader from "~/components/page-header"

const { data: blogData } = await useAsyncData('blog-list', () => {
  return queryCollection('blog')
  .order('date', 'DESC')
  .all()
})


const blogs = computed(() => {
  if (!blogData.value) return []
  return blogData.value.map(b => {
    b.date = new Date(b.date);
    return b;
  }).sort((a,b) => b.date - a.date);
})

useHead({
  title: 'James MacIvor\'s Blog Index',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: "A list of my blogs",
    },
  ],
})
</script>