<template>
  <div class="body-container">
    <site-nav />
    <nuxt />
    <div class="hidden my-8 w-1/2 max-w-sm"></div>
    <pre class="hidden line-numbers language-javascript">
      <code>
        <span class="token operator string punctuation"></span>
      </code>
    </pre>
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

