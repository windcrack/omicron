<script setup>
import Img from '@/components/image/index.vue';
import Service from '@/components/Service/index.vue';
import BannerMan from "@/assets/img/home/banner-1.png";
import BannerMob from "@/assets/img/home/banner-bg-mob.png";
</script>

<template>
  <div class="banner-services">
    <div class="banner-services__body">
      <div class="banner-services__title">Подключенные услуги</div>
      <div class="banner-services__info">
        <Service service-name="Интернет" service-type="БЕТА 100 Мб/с" img-url="/src/assets/img/internet.png" url="#" />
        <Service service-name="Цифровое ТВ" service-type="Комболайт" img-url="/src/assets/img/tv.png" url="#" />
        <Service service-name="Кинотеатр" service-type="не подключено" img-url="/src/assets/img/cinema.png" url="#" />
      </div>
      <div class="banner-services__image">
        <Img img-url="/src/assets/img/controller.png" />
      </div>
      <div class="banner-services__image">
<!--        <Img img-url="/src/assets/img/router.png" />-->
        <picture>
          <source media="(min-width: 1161px)" srcset="/src/assets/img/router.png" />
          <img src="/src/assets/img/router-table.png" alt="" class="pict">
        </picture>
      </div>
    </div>
  </div>
</template>

