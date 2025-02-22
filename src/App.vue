<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Header from './components/header/index.vue';
import Footer from './components/footer/index.vue';
import Banner from "@/components/banner/index.vue";
</script>

<template>
  <Header />
  <main>
    <div class="container-grid">
      <Banner />
      <RouterView />
    </div>
  </main>
  <Footer />
</template>

