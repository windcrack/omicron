<script setup>
const props = defineProps({
  modifyClassBtn: {
    type: String,
    default(){
      return 'form';
    }
  },

})
</script>

<template>
  <button :class="`btn btn_${props.modifyClassBtn}`">
    <slot></slot>
  </button>
</template>

