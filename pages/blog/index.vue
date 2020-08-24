<template>
    <section>
        <page-header title="Blog" />    
        <div class="container-center mt-8">
            <ul>
                <li><nuxt-link to="/blog/how-i-got-started">How I Got Started As A Software Developer</nuxt-link></li>
            </ul>
        </div>
    </section>
</template>

<script>
import pageHeader from "~/components/page-header"
export default {
    components: {
        pageHeader
    }
}
</script>