<script setup>

import Contact from "@/components/contact/index.vue";
import Img from "@/components/image/index.vue";

const date = new Date();

</script>

<template>
  <footer class="footer">
    <div class="container-grid">
      <section class="footer__body">
        <div class="footer__contacts">
          <Contact link="+7 (861) 2100522" text="Краснодарский край" :is-dashe="false" link-type="tel:" />
          <Contact link="+7 (863) 2040496" text="Ростовская область" :is-dashe="false" link-type="tel:" />
          <Contact link="+7 (918) 2840363" text="БЕСПЛАТНО С МТС" :is-dashe="false" link-type="tel:" />
          <Contact link="support@omicron.online" :is-dashe="false" link-type="mailto::" />
          <Contact link="https://omicron.online/" :is-dashe="false" />
        </div>
        <div class="footer__socials">
          <div class="footer__socials-title">СОЦ. СЕТИ:</div>
          <Img img-url="/src/assets/img/tg-white.png" img-alt="tg" />
          <Img img-url="/src/assets/img/vk-white.png" img-alt="vk" />
          <Img img-url="/src/assets/img/ok-white.png" img-alt="ок" />
        </div>
        <div class="footer__descr">
          <div class="footer__policy">Посещая сайт вы соглашаетесь на обработку
            файлов Cookies и персональных данных</div>
          <div class="footer__text">Личный кабинет ООО «Юг-Телеком-К», {{ date.getFullYear() }}</div>
        </div>
      </section>

    </div>
  </footer>
</template>
КОНТАКТЫ:




