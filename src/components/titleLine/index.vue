<script setup>
const props = defineProps({
  title: String,
})
</script>

<template>
  <section class="title-line full-screen">
    <div class="title-line__body">
      <h1 class="title">{{props.title}}</h1>
    </div>
  </section>
</template>
