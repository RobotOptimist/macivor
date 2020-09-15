<template>
  <div class="body-container">
    <site-nav />
    <nuxt />
    <site-footer />
  </div>
</template>

<script>
import siteNav from '~/components/site-nav'
import siteFooter from '~/components/site-footer';
export default {
  components: {
    siteNav,
    siteFooter
  }
}
</script>

