<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import Img from '@/components/image/index.vue';
const modules = [EffectCoverflow];
const isTable = window.matchMedia("(max-width: 768px)").matches;
const coverflowEffect = {
  rotate: 0,
  stretch: 0,
  depth: 100,
  modifier: 1,
  slideShadows: false,
  scale: 0.9
}

const breakpoints = {
  '280': {
    slidesPerView: 'auto',
    spaceBetween: 10,
    centeredSlides: true,
  },
  '769': {
    slidesPerView: 3,
    spaceBetween: 20,
  },
}
</script>

<template>
  <swiper
      :slides-per-view="3"
      :space-between="20"
      :effect="isTable ? 'coverflow' : ''"
      :coverflowEffect="coverflowEffect"
      :modules="modules"
      :breakpoints="breakpoints"
  >
    <swiper-slide>
      <Img img-url="/src/assets/img/home/banner-bg-mob.png" />
    </swiper-slide>
    <swiper-slide>
      <Img img-url="/src/assets/img/home/banner-bg-mob.png" />
    </swiper-slide>
    <swiper-slide>
      <Img img-url="/src/assets/img/home/banner-bg-mob.png" />
    </swiper-slide>
    <swiper-slide>
      <Img img-url="/src/assets/img/home/banner-bg-mob.png" />
    </swiper-slide>
    <swiper-slide>
      <Img img-url="/src/assets/img/home/banner-bg-mob.png" />
    </swiper-slide>
    <swiper-slide>
      <Img img-url="/src/assets/img/home/banner-bg-mob.png" />
    </swiper-slide>
  </swiper>
</template>
