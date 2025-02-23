<script setup>
import { useRoute } from "vue-router";
import {computed} from "vue";
import {useStore} from "vuex";

import LogoIcon from "@/components/icons/logo.vue";
import Img from '@/components/image/index.vue';
import SubMenu from '@/components/submenu/index.vue';
import SubMenuNavs from "@/components/submenu/SubMenuNavs.vue";

const store = useStore();
const route = useRoute();

const isLkPage = computed(() => route.name !== 'home');
const isShow = computed(() => store.getters.showModal);
const isShowNav = computed(() => store.getters.showNav);

function handlerMenu(type){
  console.log('handlerMenu type', type);
  store.commit('updateShowModal', type);
}

</script>

<template>
    <header class="header">
      <div class="container-grid">
        <div class="header-left-block"></div>
        <section class="header__body">
          <div class="header-logo">
            <RouterLink class="header-logo__link" to="/">
              <LogoIcon />
            </RouterLink>
          </div>
          <div class="header-user" v-show="isLkPage">
            <div class="header-user__info" @click="handlerMenu('user')">
              <div class="header-user__name">
                Телекомов И. С.
              </div>
              <div class="header-user__avatar">
                <Img img-url="/src/assets/img/avatar-default.png" />
              </div>
            </div>

            <div class="header-burger" @click="handlerMenu('nav')">
              <button class="burger-btn">
                <div class="burger">
                  <span></span>
                </div>
              </button>
            </div>
          </div>
          <SubMenu v-show="isShow" />
          <SubMenuNavs v-show="isShowNav" />
        </section>
      </div>
    </header>
</template>