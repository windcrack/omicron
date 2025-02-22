<script setup>
const props = defineProps({
  socialLink: {
    type: String,
    required: true,
    default: '',
  }
})
</script>

<template>
  <a :href="props.socialLink" class="social">
      <slot></slot>
  </a>
</template>
