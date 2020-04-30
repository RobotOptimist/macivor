<template>
    <div class="career-card w-full">
        <div class="main-career">
            <picture v-if="logoFileExtension !== 'svg'">
                <source :srcset="`logos/${logoFileName}.webp`" type="image/webp">
                <source :srcset="`logos/${logoFileName}.${logoFileExtension}`" :type="`image/${logoFileExtension}`">
                <img class="rounded-lg w-64 max-w-full" :src="`logos/${logoFileName}.${logoFileExtension}`" :alt="altText">
            </picture>
            <div v-else>
                <slot name="svg-content"></slot>
            </div>
            <div class="m-4 flex flex-col text-center sm:w-2/3">
                <h2 v-if="!subCard">{{title}}</h2>
                <h3 v-else>{{title}}</h3>
                <p v-if="!subCard">{{`${startYear} - ${endYear}`}}</p>
                <p v-else>{{duration}}</p>
                <slot name="main-description"></slot>
            </div>                                
        </div>
        <div class="sub">
            <slot name="sub-careers"></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {        
        subCard: {
            type: Boolean,
            default: false
        },
        logoFileName: {
            type: String,
            default: 'default-placeholder'
        },
        logoFileExtension: {
            type: String,
            default: 'png'
        },
        altText: {
            type: String,
            default: 'default image'
        },
        title: {
            type: String,
            default: 'Default Title'
        },
        startYear: {
            type: String,
            default: '1981'
        },
        endYear: {
            type: String,
            default: 'Current'
        },
        duration: {
            type: String,
            default: '0 months'
        }        
    }
}
</script>
