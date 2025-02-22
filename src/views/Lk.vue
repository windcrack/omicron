<script setup>

import Input from "@/components/form-auth/Input.vue";
import BannerServices from "@/components/banner/BannerServices.vue";
import Img from '@/components/image/index.vue';
import Button from '@/components/button/index.vue';
import BannerFinance from "@/components/banner/BannerFinance.vue";
import BannerContract from "@/components/banner/BannerContract.vue";
import Slider from "@/components/slider/index.vue";
</script>

<template>
  <section class="home-lk">
    <div class="home-lk__search">
      <form action="" class="home-lk__form">
        <Button modify-class-btn="search">
          <Img img-url="/src/assets/img/find.png" />
        </Button>
        <Input text-placeholder="Поиск по сайту" />
      </form>
    </div>
    <div class="home-lk__body">
      <BannerServices />
      <BannerFinance />
      <BannerContract />
    </div>
    <div class="home-lk__images">
      <Slider />
    </div>
  </section>
</template>
