<script setup>
import {useStore} from "vuex";
const store = useStore();

const props = defineProps({
  tabType: {
    type: String,
    default(){
      return '';
    }
  }
})

function handlerTab(e){
  store.commit('updateIsActiveTab', props.tabType);
}
</script>


<template>
  <div :class="`form__tab ${store.getters.activeTab === props.tabType ? 'active' : ''}`" @click="handlerTab">
    <div class="form__tab-title">
      <slot />
    </div>
  </div>
</template>
