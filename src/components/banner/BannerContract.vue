<script setup>

import Img from "@/components/image/index.vue";
</script>

<template>
  <div class="banner-contract">
    <div class="banner-contract__body">
      <div class="banner-contract__header">
        <div class="banner-contract__title">Договор</div>
        <div class="banner-contract__number">0123498</div>
      </div>
      <div class="banner-contract__name">Телекомов Игорь  Степанович</div>
      <address class="banner-contract__address">Краснодарский Край, г. Апшеронск, ул. Ленина 154/2 </address>
      <div class="banner-contract__image">
        <Img img-url="/src/assets/img/press.png" />
      </div>
      <RouterLink to="#" class="banner-finance__link">
        все договора
      </RouterLink>
    </div>
  </div>
</template>