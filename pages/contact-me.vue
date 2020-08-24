<template>
  <section>
    <page-header title="Contact James"></page-header>
    <div class="container-center">
      <p class="mt-12">What's on your mind?</p>
      <form class="flex flex-col mt-12 p-4" @submit.prevent="submit">
        <label class="mt-4" for="email">
          Your Email Address
          <input
            class="p-2 shadow-md rounded-lg w-full mt-2"
            id="email"
            type="email"
            name="email"
            v-model="data.emailAddress"
          />
        </label>
        <label class="mt-4" for="message">
          Your Message
          <textarea
            class="p-2 shadow-md rounded-lg w-full mt-2 h-24"
            id="message"
            name="message"
            v-model="data.message"
          ></textarea>
        </label>
        <div>
          <button
            class="px-4 py-2 text-indigo-200 bg-indigo-700 hover:text-white mt-4 rounded-lg"
            type="submit"
          >Submit</button>
        </div>
      </form>
      <div v-if="response != null">
        <div v-if="success">
          <p>Thanks! Feel free to email me again if you have any other thoughts.</p>
        </div>
        <div v-else>
          <p>Oops, some kinda problem here, idunno.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import pageHeader from '~/components/page-header'
export default {
  components: {
    pageHeader,
  },
  data() {
    return {
      data: {
        emailAddress: '',
        message: '',
      },
      response: null,
      success: true,
    }
  },
  methods: {
    async submit(e) {
      e.preventDefault()
      this.response = await fetch('https://formspree.io/myyddpzn', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.data),
      })
      this.data.message = ''
    },
  },
  head() {
    return {
      title: 'Contact James MacIvor',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Tell me what's on your mind",
        },
      ],
    }
  },
}
</script>