<script setup>

import Img from "@/components/image/index.vue";
</script>

<template>
  <div class="header-sub-menu header-sub-menu_nav">
    <ul class="header-sub-menu__list">
      <li class="header-sub-menu__item">
        <div class="triangle"></div>
        <div class="header-sub-menu__info">
          <div class="header-sub-menu__text">Интернет</div>
        </div>
      </li>
      <li class="header-sub-menu__item">
        <div class="triangle"></div>
        <div class="header-sub-menu__info">
          <div class="header-sub-menu__text">Цифровое ТВ</div>
        </div>
      </li>
      <li class="header-sub-menu__item">
        <div class="triangle"></div>
        <div class="header-sub-menu__info">
          <div class="header-sub-menu__text">Кинотеатр</div>
        </div>
        <ul class="header-sub-menu__two">
          <li class="header-sub-menu__two-item">Оплата</li>
          <li class="header-sub-menu__two-item">Омега Бонусы</li>
          <li class="header-sub-menu__two-item">История платежей</li>
        </ul>
      </li>
      <li class="header-sub-menu__item">
        <div class="triangle"></div>
        <div class="header-sub-menu__info exit">
          <div class="header-sub-menu__text">Договор</div>
        </div>
      </li>
    </ul>
  </div>
</template>
