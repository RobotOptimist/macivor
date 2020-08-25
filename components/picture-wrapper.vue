<template>
    <div>
        <picture>
            <source :srcset="`/${fileName}.webp`" type="image/webp">
            <source :srcset="`/${fileName}.${fileExtension}`" :type="`image/${fileExtension}`">
            <img :class="classes" :src="`/${fileName}.${fileExtension}`" :alt="altText">
        </picture>      
        <div v-if="attribution != ''" class="attribution flex justify-center">
            <p class="text-xs italic">{{ attribution }}</p>
        </div>  
    </div>
</template>

<script>
export default {
    props: {
        fileName: {
            type: String,
            default: 'default-placeholder'
        },
        fileExtension: {
            type: String,
            default: 'png'
        },
        altText: {
            type: String,
            default: 'default image'
        },
        classes: {
            type: String,
            default: ''
        },
        attribution: {
            type: String,
            default: ''
        }
    }
}
</script>