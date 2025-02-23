import './assets/styles/styles.scss'
import clickOutside from './directives/clickOutside';


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/vuex/store.js';

const app = createApp(App)
app.directive('click-outside', clickOutside);
app.use(router)
app.use(store);
app.mount('#app')
