<script setup>

import Service from "@/components/Service/index.vue";
import Img from '@/components/image/index.vue';
const price = '1 099 ₽';
const points = '750 Б';
</script>

<template>
  <div class="banner-finance">
    <div class="banner-finance__body">
      <div class="banner-finance__title">Финансы</div>
      <div class="banner-finance__info">
        <Service service-name="Баланс: " :service-type="price" />
        <Service service-name="Омега баллы: " :service-type="points" />
      </div>
      <div class="banner-finance__image">
        <Img img-url="/src/assets/img/coin.png" />
      </div>
      <div class="banner-finance__links">
        <RouterLink to="#" class="banner-finance__link">
          оплата
        </RouterLink>
        <RouterLink to="#" class="banner-finance__link">
          бонусы
        </RouterLink>
        <RouterLink to="#" class="banner-finance__link">
          история
        </RouterLink>
      </div>
    </div>
  </div>
</template>

