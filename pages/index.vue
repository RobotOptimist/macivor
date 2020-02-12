<template>
  <div class="container">
    <div>
      <portrait />
      <h1 class="title">
        James MacIvor
      </h1>
      <h2 class="subtitle">
        My Personal Site
      </h2>
      <div class="links">
        <a class="button--green">My Career</a>
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >
          My Blog
        </a>
        <a class="button--green">
          My Company
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

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
