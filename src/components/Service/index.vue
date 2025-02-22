<script setup>

import Img from "@/components/image/index.vue";
import IconArrowLeft from "@/components/icons/IconArrowLeft.vue";
const props = defineProps({
  serviceName: {
    type: String,
    required: true,
    default: '',
  },
  serviceType: {
    type: String,
    default: 'не подключено',
  },
  imgUrl: {
    type: String,
    default: '',
  },
  url: {
    type: String,
    default: '',
  }
})
</script>

<template>
  <div class="banner-service">
    <div class="banner-service__image" v-show="props.imgUrl !== ''">
      <img :src="props.imgUrl" alt="" class="pict">
    </div>
    <div class="banner-service__text">
      <span class="banner-service__name">{{props.serviceName}}</span> <span class="banner-service__type">{{props.serviceType}}</span>
    </div>
    <RouterLink :to="props.url" class="banner-service__link" v-show="props.url !== ''">
      <IconArrowLeft />
    </RouterLink>
  </div>
</template>
