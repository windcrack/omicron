<script setup>
import Img from '@/components/image/index.vue';
import Btn from '@/components/button/index.vue';
import IconArrowLeft from "@/components/icons/IconArrowLeft.vue";
import Service from '@/components/Service/index.vue';
</script>

<template>
  <div class="banner-services">
    <div class="banner-services__body">
      <div class="banner-services__title">Подключенные услуги</div>
      <div class="banner-services__info">
        <Service service-name="Интернет" service-type="БЕТА 100 Мб/с" img-url="/src/assets/img/internet.png" url="#" />
        <Service service-name="Цифровое" service-type="ТВ Комболайт" img-url="/src/assets/img/tv.png" url="#" />
        <Service service-name="Кинотеатр" service-type="не подключено" img-url="/src/assets/img/cinema.png" url="#" />
      </div>
    </div>
  </div>
</template>

