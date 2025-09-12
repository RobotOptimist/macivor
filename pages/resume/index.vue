<template>
  <section>
    <page-header title="Resume" />
    <div class="resume-container mt-8">
      <div v-if="resume" class="resume-content">
        <ContentRenderer :value="resume" />
      </div>
      <div v-else>
        <p>Loading resume...</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import pageHeader from "~/components/page-header"

const { data: resume, error } = await useAsyncData('resume', () => {
  return queryCollection('resume')
    .path('/resume/resume_doc')
    .first()
})

if (error.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Resume not found'
  })
}

useHead({
  title: 'James MacIvor - Resume',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'James MacIvor\'s professional resume and experience',
    },
  ],
})
</script>

<style scoped>
.resume-container {
  @apply max-w-4xl mx-auto px-8;
}

.resume-content {
  @apply text-left;
  font-family: 'Roboto Slab', serif;
  line-height: 1.6;
}

.resume-content :deep(h1) {
  @apply text-3xl font-bold mb-6 text-gray-800 border-b-2 border-indigo-500 pb-2;
}

.resume-content :deep(h2) {
  @apply text-2xl font-semibold mb-4 mt-6 text-gray-700;
}

.resume-content :deep(h3) {
  @apply text-xl font-semibold mb-3 mt-4 text-gray-700;
}

.resume-content :deep(h4) {
  @apply text-lg font-semibold mb-2 mt-3 text-gray-700;
}

.resume-content :deep(p) {
  @apply text-base mb-3 text-gray-700 leading-relaxed;
  max-width: none;
}

.resume-content :deep(ul) {
  @apply text-left list-disc ml-6 mb-4 text-base;
}

.resume-content :deep(ol) {
  @apply text-left list-decimal ml-6 mb-4 text-base;
}

.resume-content :deep(li) {
  @apply mb-1 text-gray-700;
}

.resume-content :deep(strong) {
  @apply font-semibold text-gray-800;
}

.resume-content :deep(em) {
  @apply italic text-gray-600;
}

.resume-content :deep(hr) {
  @apply border-gray-300 my-6;
}

.resume-content :deep(blockquote) {
  @apply border-l-4 border-indigo-300 pl-4 italic text-gray-600 my-4;
}

.resume-content :deep(code) {
  @apply bg-gray-100 px-2 py-1 rounded text-sm font-mono;
}

.resume-content :deep(pre) {
  @apply bg-gray-100 p-4 rounded-lg overflow-x-auto my-4;
}

.resume-content :deep(pre code) {
  @apply bg-transparent p-0;
}

.resume-content :deep(table) {
  @apply w-full border-collapse border border-gray-300 my-4;
}

.resume-content :deep(th) {
  @apply border border-gray-300 px-4 py-2 bg-gray-50 font-semibold text-left;
}

.resume-content :deep(td) {
  @apply border border-gray-300 px-4 py-2;
}

.resume-content :deep(a) {
  @apply text-indigo-600 hover:text-indigo-800 underline;
}
</style>
