<template>
  <div class="">
    <div class="h-10 w-full bg-indigo-700"></div>
    <div class="container-title bg-indigo-700 flex justify-center">
        <h1 class="font-semibold text-5xl md:text-4xl mb-5">
          Hi, I'm James MacIvor
        </h1>
    </div>
    <div class="container-center mt-8">      
      <portrait />
      <h2 class="subtitle font-medium text-3xl mb-5 p-2">
        Welcome to My Website
      </h2>
      <div class="links w-full">
          <a class="button--green">Career</a>
          <a
            href="https://nuxtjs.org/"
            target="_blank"
            class="button--green"
          >
            Blog
          </a>
          <a class="button--green">
            Company
          </a>
          <a
            href="https://github.com/nuxt/nuxt.js"
            target="_blank"
            class="button--green"
          >
            About Me  
          </a>
      </div>
    </div>
  </div>
</template>

<script>
import portrait from '~/components/portrait.vue'

export default {
  components: {
    portrait
  }
}
</script>

<style lang="postcss">
.container-title {
  background: linear-gradient(90deg, #4c51bf, #313587);
}
.container-title > h1 {
  color: white;
}
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
