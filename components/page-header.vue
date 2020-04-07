<template>
    <div>        
        <div class="container-title bg-indigo-700 flex justify-center">
            <h1>{{title}}</h1>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title : {
            type: String,
            default: "Default Title"
        }
    }
}
</script>