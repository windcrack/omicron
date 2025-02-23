<script setup>
import Img from '@/components/image/index.vue';
import {useStore} from "vuex";

const store = useStore();
function shortedPhoneNumber(phoneNumber){
  console.log(phoneNumber.replace(/(\d{8})(\d{2})$/, '**** $2'));
  return phoneNumber.replace(/(\d{8})(\d{2})$/, '**** $2');
}
function closeMenu(){
  store.commit('updateShowModal');
}
</script>

<template>
  <div :class="`header-sub-menu` ">
    <ul class="header-sub-menu__list">
      <li class="header-sub-menu__item">
        <div class="header-sub-menu__img">
          <Img img-url="/src/assets/img/IconPhone.png" />
        </div>
        <div class="header-sub-menu__info">
          <div class="header-sub-menu__title">Номер телефона</div>
          <div class="header-sub-menu__text">+7 918 938 ** 55</div>
<!--          <div class="header-sub-menu__text">{{phone}}</div>-->
        </div>
      </li>
      <li class="header-sub-menu__item">
        <Img img-url="/src/assets/img/IconEmail.png" />
        <div class="header-sub-menu__info">
          <div class="header-sub-menu__title">Email</div>
          <div class="header-sub-menu__text">telekomov@ya.ru</div>
        </div>
      </li>
      <li class="header-sub-menu__item">
        <Img img-url="/src/assets/img/IconComp.png" />
        <div class="header-sub-menu__info">
          <div class="header-sub-menu__title">Устройства и доступ</div>
        </div>
      </li>
      <li class="header-sub-menu__item">
        <Img img-url="/src/assets/img/IconExit.png" />
        <div class="header-sub-menu__info exit">
          <div class="header-sub-menu__text">Выход</div>
        </div>
      </li>
    </ul>
  </div>
</template>
