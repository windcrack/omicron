<script setup>
import {useStore} from "vuex";
const store = useStore();

import Tab from '@/components/tab/index.vue';
import Input from "@/components/form-auth/Input.vue";
import Remember from "@/components/form-auth/Remember.vue";
import Button from '@/components/button/index.vue';
import Forgot from "@/components/form-auth/Forgot.vue";

</script>

<template>
  <form action="" class="form">
    <div class="form__title">
      Авторизация
    </div>
    <div class="form__tabs">
      <Tab tab-type="agreement">
        по № договора
      </Tab>
      <Tab tab-type="login">
        по логину
      </Tab>
    </div>
    <div class="form__body">
      <div class="form__inputs" v-if="store.getters.activeTab === 'agreement'">
        <Input type-input="text" name="user_contract" text-placeholder="Номер договора" />
        <Input type-input="password" name="user_pass" text-placeholder="Пароль" />
        <Remember />
      </div>
      <div class="form__inputs" v-else>
        <Input type-input="text" name="user_login" text-placeholder="Логин" />
        <Input type-input="password" name="user_pass" text-placeholder="Пароль" />
        <Remember label-text="Запомнить логин" />
      </div>


      <RouterLink to="/lk" class="form__button">
        <Button>
          вход
        </Button>
      </RouterLink>
      <Forgot />
    </div>
  </form>
</template>
