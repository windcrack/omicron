<script setup>
const props = defineProps({
  link: String,
  text: String,
  linkType: {
    type: String,
    default(){
      return '';
    }
  },
  isDashe: {
    type: Boolean,
    default(){
      return true
    }
  }
});
</script>

<template>
  <div class="contact" v-if="props.isDashe">
    <a :href="`${linkType}${props.link}`" class="contact__link">{{props.link}}</a> - <span class="contact__district">{{props.text}}</span>
  </div>
  <div class="contact" v-else>
    <a  :href="`${linkType}${props.link}`" class="contact__link">{{props.link}} {{props.text}}</a>
  </div>

</template>
