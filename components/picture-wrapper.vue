<template>
    <div>
        <picture v-if="legacy" :class="classes">
            <source :srcset="`/${fileName}.webp`" type="image/webp">
            <source :srcset="`/${fileName}.${fileExtension}`" :type="`image/${fileExtension}`">
            <img  :src="`/${fileName}.${fileExtension}`" :alt="altText">
        </picture>      
        <img :class="classes" v-else :src="cloudUrl" :alt="altText"/>
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
        },
        legacy: {
            type: Boolean,
            default: true
        }
    },
    computed: {
        cloudUrl() {
            return this.$cloudinary.image.url(this.fileName, { fetchFormat: "auto"})
        }
    }
}
</script>