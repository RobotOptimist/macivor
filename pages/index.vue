<template>
  <div>    
    <page-header title="Hi, I'm James MacIvor" />
    <div class="container-center mt-8">      
      <picture-wrapper :legacy="false" classes="w w-3/4 md:w-56 rounded-lg" fileName="selfportrait05_wlhkie" altText="a picture of james macivor"/>
      <h2 class="subtitle font-medium text-3xl mb-5 p-2">
        Welcome
      </h2>
      <div class="links w-full">
          <nuxt-link class="no-underline" to="/blog">Blog</nuxt-link>
      </div>      
    </div>
  </div>
</template>

<script>
import portrait from '~/components/portrait.vue'
import pageHeader from "~/components/page-header"
export default {
  components: {
    portrait,
    pageHeader    
  }
}
</script>

<style lang="postcss">

.links a {
  @apply block w-full font-bold text-xl border border-solid border-indigo-500;
  border-bottom: none;
  padding: 5%;  
}

@screen md {
  .links {
    @apply flex;    
  }
  .links a {
    @apply w-1/4 border border-solid border-indigo-500
  }
}

@screen lg {
  .links a {
    @apply w-40 text-center text-base p-0 pt-3 pb-3;
  }
  .links {
    @apply justify-center;
  }
}

.links a:hover, a:active {
  @apply bg-indigo-700 text-white
}
</style>
