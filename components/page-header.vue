<template>
    <div>        
        <div class="container-title bg-indigo-700 flex justify-center text-center">
            <h1>{{title}}</h1>
        </div>
        <div v-if="date">
            <p>{{date}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title : {
            type: String,
            default: "Default Title"
        },
        date : {
            type: String,
            default: null
        }
    }
}
</script>