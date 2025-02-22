<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import Img from '@/components/image/index.vue';
</script>

<template>
  <swiper
      :slides-per-view="3"
      :space-between="20"
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
