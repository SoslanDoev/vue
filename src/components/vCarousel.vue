<template>
    <swiper
        :breakpoints="breakpoints"
        :modules="modules"
        :autoplay="{delay: 7000}"
        :loop="false"
    >
    <!-- :pagination="{ clickable: true }" -->
        <swiper-slide v-for="slide in slider" :key="slide.id" class="slide__item" ref="slide__item" @mousemove="mouseMove">
            <img :src="require(`@/assets/image/slider/${slide.path_image}`)" :alt="slide.name" class="slide__image" ref="slide__image">
        </swiper-slide>
    </swiper>
</template>

<script>
    import { Swiper, SwiperSlide } from 'swiper/vue'
    import {Autoplay} from 'swiper'
    import "swiper/css";
    // import "swiper/css/pagination";
    export default {
        name: 'vCarousel',
        components: {
            Swiper,
            SwiperSlide,
        },
        data() {
            return {
                modules: [
                    // Pagination,
                    Autoplay
                ],
                breakpoints: {       
                    250: {
                        slidesPerView: 1,
                        spaceBetween: 25    
                    },
                    790: {       
                        slidesPerView: 1.5,       
                        spaceBetween: 10     
                    },   
                }
            }
        },
        props: {
            slider: {
                type: Array,
            },
        },
        methods: {
            mouseMove(e) {
                console.log(e)
            },
        }
    }
</script>

<style scoped>
    .slide__item {
        width: 100%;
        height: 100%;
        position: relative;
        perspective: 1000;
        transform-style: preserve-3d;
    }
    .slide__image {
        max-width: 500px;
        width: 100%;
        max-height: 100%;
        object-fit: cover;
        border-radius: 10px;
        transition: transform 200ms linear;
    }
    @media screen and (max-width: 980px) {
        .slide__item {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
</style>