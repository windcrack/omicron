<script setup>

import Input from "@/components/form-auth/Input.vue";
import BannerServices from "@/components/banner/BannerServices.vue";
</script>

<template>
  <section class="home-lk">
    <div class="home-lk__search">
        <Input text-placeholder="Поиск по сайту" />
    </div>
    <div class="home-lk__body">
      <BannerServices />
    </div>
  </section>
</template>
