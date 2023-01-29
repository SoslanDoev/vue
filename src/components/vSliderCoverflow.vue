<template>
    <swiper
        :effect="'coverflow'"
        :grabCursor="true"
        :centeredSlides="true"
        :slidesPerView="'auto'"
        :coverflowEffect="{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        }"
        :pagination="true"
        :modules="modules"
        class="mySwiper"
    >
        <swiper-slide v-for="slide in slider" :key="slide.id" class="slider__item">
            <h3 class="slide__item-title title">{{ slide.name }}</h3>  
            <p class="slide__item-text">{{ slide.text }}</p>
            <div class="slide__item-info">
                <div class="slide__item-box">
                    <p class="slide__item-price">От {{ slide.price }}</p>
                    <p class=slide__item-time>От {{ slide.time }}</p>
                </div>
                <BtnGreen class="slide__item-btn">Подробнее</BtnGreen>
            </div>
        </swiper-slide>
    </swiper>
  </template>
<script>
    import { Swiper, SwiperSlide } from "swiper/vue";
    import "swiper/css";
    import "swiper/css/effect-coverflow";
    import "swiper/css/pagination";
    import { EffectCoverflow, Pagination } from "swiper";
    export default {
        name: 'vSliderCoverflow',
        components: {
        Swiper,
        SwiperSlide,
    },
    props: {
        slider: {
            type: Array,
        }
    },
    data() {
        return {
            modules: [EffectCoverflow, Pagination],
        }
    }
}
</script>

<style scoped>
    .swiper-wrapper {
        display: flex;
        align-items: center;
    }
    .slider__item {
        max-width: 295px;
        padding: 37px 42px 20px;
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 36px;
        overflow: hidden;
        min-height: 50vh;
        display: flex;
        flex-direction: column;
    }
    .slide__item-title {
        font-size: 2rem;
        line-height: 2.75rem;
    }
    .slide__item-text {
        text-align: center;
        font-size: 0.75rem;
        line-height: 1rem;
        margin: 0 0 auto 0;
    }
    .slide__item-title {
        color: var(--clr-white);
    }
    .slide__item-btn {
        display: none;
    }
    .swiper-slide-active .slide__item-btn {
        display: inline-block;
    }
    .swiper-slide-active .slide__item-title {
        color: var(--clr-green-neon);
    }
    .swiper-slide-active .slide__item-text {
        font-size: 1rem;
        overflow-y: auto;
    }
    .swiper-slide-active {
        max-width: 370px;
        padding: 37px 42px 20px;
        min-height: 55vh;
        /* min-height: 450px; */
        background: linear-gradient(168.64deg, #313134 9.31%, #292929 61.88%, #282828 111.76%);
    }
    .slide__item-info {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
    }
    .swiper-slide-active .slide__item-info {
        justify-content: baseline;
    }
    .slide__item-time {
        font-size: 1rem;
    }
</style>