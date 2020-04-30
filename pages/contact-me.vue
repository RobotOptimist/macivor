<template>
    <section>
        <page-header title="Contact James"></page-header>
        <div class="container-center">
            <p class="mt-12">What's on your mind?</p>
            <form class="flex flex-col mt-12 p-4" action="https://formspree.io/myyddpzn" method="post">
                <label class="mt-4" for="email">
                    Your Email Address
                    <input class="p-2 shadow-md rounded-lg w-full mt-2" id="email" type="email" name="email">
                </label>
                <label class="mt-4" for="message">
                    Your Message
                    <textarea class="p2 shadow-md rounded-lg w-full mt-2 h-24" id="message" name="message"></textarea>
                </label>
                <div>
                    <button class="px-4 py-2 text-indigo-200 bg-indigo-700 hover:text-white mt-4 rounded-lg" type="submit">Submit*</button>
                </div>                
            </form>
            <p class="text-sm mt-4">*You'll be redirected to Formspree on a successful submission. Yeah I could send this form with JavaScript and avoid that but, *sigh* - meh.</p>
        </div>
    </section>
</template>

<script>
import pageHeader from "~/components/page-header";
export default {
    components: {
        pageHeader,
    }
}
</script>