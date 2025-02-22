<script setup>
const props = defineProps({
  typeInput: String,
  textPlaceholder: String,
})
</script>

<template>
  <div class="form__block">
    <input :type="props.typeInput" class="form__input" :placeholder="props.textPlaceholder" />
  </div>
</template>
