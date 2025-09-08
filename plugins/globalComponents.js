import pageHeader from '~/components/page-header'
import pictureWrapper from '~/components/picture-wrapper.vue'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('pageHeader', pageHeader);
  nuxtApp.vueApp.component('pictureWrapper', pictureWrapper);
});

