<template>
    <div>
        <picture :class="classes">
            <source :srcset="`/${fileName}.webp`" type="image/webp">
            <source :srcset="`/${fileName}.${fileExtension}`" :type="`image/${fileExtension}`">
            <img  :src="`/${fileName}.${fileExtension}`" :alt="altText">
        </picture>      
        <div v-if="attribution != ''" class="attribution flex justify-center max-w-md">
            <p v-if="attributionLink == ''" class="text-xs italic">{{ attribution }}</p>
            <p v-else class="text-xs italic">
                <a :href="attributionLink">{{attribution}}</a>
            </p>
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
            default: '',
        },
        attributionLink: {
            type: String,
            default: ''
        }
    }
}
</script>