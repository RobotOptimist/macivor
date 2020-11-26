<template>
<nav class="flex items-center justify-between flex-wrap bg-indigo-700 p-4">
    <nuxt-link to="/" class="flex items-center flex-shrink-0 text-white mr-6">
        <logo class="h-12 mr-4"/>
        <span class="font-semibold text-xl tracking-tight">James MacIvor</span>
    </nuxt-link>
    <div class="block lg:hidden">
        <button @click="toggleMenu" class="flex items-center px-3 py-2 border rounded text-indigo-200 border-indigo-400 hover:text-white hover:border-white">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
    </div>
    <div :class="showMenu ? 'h-48' : 'h-0'" class="w-full overflow-hidden lg:h-auto block flex-grow lg:flex lg:items-center lg:w-auto transition-all duration-200 ease-in-out">
        <div class="text-sm lg:flex-grow">
            <nuxt-link to="/career" class="block mt-4 lg:inline-block lg:mt-0 text-indigo-200 hover:text-white mr-4">
                Career
            </nuxt-link>
            <nuxt-link to="/blog" class="block mt-4 lg:inline-block lg:mt-0 text-indigo-200 hover:text-white mr-4">
                Blog
            </nuxt-link>
            <nuxt-link to="/company" class="block mt-4 lg:inline-block lg:mt-0 text-indigo-200 hover:text-white mr-4">
                Company
            </nuxt-link>
            <nuxt-link to="/about" class="block mt-4 lg:inline-block lg:mt-0 text-indigo-200 hover:text-white">
                About Me
            </nuxt-link> 
        </div>
        <div class="flex mt-2 lg:mt-0">
            <a class="margin-top-nudge mr-2" href="/feed.xml">
                <img class="w-8" alt="RSS Feed" src="@/assets/images/rss-icon.png">
            </a>
            <a href="https://dev.to/robotoptimist">
                <img class="w-8" src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg" alt="James MacIvor's dev.to Profile">
            </a>
        </div>
    </div>
</nav>
</template>

<script>
import logo from '~/components/logo'
export default {
    components: {
        logo
    },
    data() {
        return {
            showMenu: false
        }
    },
    methods: {
        toggleMenu() {
            this.showMenu = !this.showMenu;
            console.log(this.showMenu);
        }
    }
}
</script>