<template>
    <div class="flex justify-center">
        <CldImage
            :class="['w-full','h-auto', classes]"
            :src="fileName"
            :alt="altText"
            fetchFormat="auto"
            quality="auto"
            :height="height"
            :width="width"
        />
        <div v-if="attribution != ''" class="attribution flex justify-center max-w-md">
            <p v-if="attributionLink == ''" class="text-xs italic">{{ attribution }}</p>
            <p v-else class="text-xs italic">
                <a :href="attributionLink">{{attribution}}</a>
            </p>
        </div>        
    </div>
</template>

<script setup>
const props = defineProps({
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
        default: ''
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
    height: {
        type: [Number, String],
        default: null
    },
    width: {
      type: [Number, String],
      default: null
    },
    legacy: {
        type: Boolean,
        default: false
    }
})

// Using CldImage component from @nuxtjs/cloudinary
</script>