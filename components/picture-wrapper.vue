<template>
    <div>
        <picture>
            <source :srcset="`/${fileName}.webp`" type="image/webp">
            <source :srcset="`/${fileName}.${fileExtension}`" :type="`image/${fileExtension}`">
            <img :class="classes" :src="`/${fileName}.${fileExtension}`" :alt="altText">
        </picture>        
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
        }
    }
}
</script>