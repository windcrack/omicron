<script setup>
const props = defineProps({
  imgUrl: {
    type: String,
    default(){
      return '';
    }
  },
  imgAlt: {
    type: String,
    default(){
      return '';
    }
  },
})
</script>

<template>
  <div class="image">
    <img :src="props.imgUrl" :alt="props.imgAlt" class="pict">
  </div>
</template>
