<script setup>
const props = defineProps({
  labelText: {
    type: String,
    required: true,
    default: 'Запомнить номер договора'
  }
})
</script>

<template>
  <div class="form__remember">
    <input id="user_remember" type="checkbox" class="form__checkbox">
    <label for="user_remember" class="form__label">{{props.labelText}}</label>
  </div>
</template>
