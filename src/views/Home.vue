<script setup>
import Banner from '@/components/banner/index.vue';
import LineTitle from '@/components/titleLine/index.vue';
import FormAuth from '@/components/form-auth/index.vue';
</script>

<template>
  <main>
    <div class="container-grid">
      <Banner />
      <LineTitle title="Личный кабинет" />
      <FormAuth />
    </div>
  </main>
</template>
