<template>
  <div>
    <site-nav />
    <nuxt />
  </div>
</template>

<script>
import siteNav from '~/components/site-nav'
export default {
  components: {
    siteNav
  }
}
</script>

<style lang="postcss">
.container-center {
    @apply flex justify-center flex-col items-center text-center mx-auto;
}
.container-title {
  background: linear-gradient(90deg, #4c51bf, #313587);
}
.container-title > h1 {
  color: white;
}
</style>
