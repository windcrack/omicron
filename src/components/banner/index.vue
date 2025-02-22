<script setup>
import BannerMan from '@/assets/img/home/banner-1.png';
import BannerMob from '@/assets/img/home/banner-bg-mob.png';
import IconTg from '@/components/icons/IconTg.vue';
import IconVk from '@/components/icons/IconVk.vue';
import IconOk from '@/components/icons/IconOk.vue';
import Social from '@/components/social/index.vue';
import Contact from '@/components/contact/index.vue';
import LogoWhite from "@/components/icons/logoWhite.vue";

</script>

<template>
  <section class="banner">
    <div class="banner__body">
      <div class="banner__image">
        <picture>
          <source media="(min-width: 1025px)" :srcset="BannerMan" />
          <img :src="BannerMob" alt="" class="pict">
        </picture>
      </div>
      <div class="banner__info">
        <div class="banner__logo">
          <LogoWhite />
        </div>
        <div class="banner__socials">
          <Social social-link="https://t.me/omicron">
            <IconTg />
          </Social>
          <Social social-link="https://vk.com/badbrowser.php">
            <IconVk />
          </Social>
          <Social social-link="https://ok.ru/">
            <IconOk />
          </Social>
        </div>
        <div class="banner__contacts">
          <Contact
              link="8 (861) 210-05-22"
              text="Краснодарский Край"
              link-type="tel:" />
          <Contact
              link="8 (863) 204-04-96"
              text="Ростовская область"
              link-type="tel:"/>
        </div>
      </div>
    </div>
  </section>
</template>
