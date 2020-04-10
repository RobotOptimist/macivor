<template>
    <footer class="flex items-center justify-between flex-wrap bg-indigo-700 p-4">
        <div class="container-center">
            <nuxt-link to="/" class="flex items-center flex-shrink-0 text-indigo-200 hover:text-white">
                <logo class="h-12 mr-4"/>
                <span class="font-semibold text-xl tracking-tight">Contact Me</span>
            </nuxt-link>
        </div>
    </footer>
</template>

<script>
import logo from '~/components/logo'
export default {
    components: {
        logo
    }
}
</script>