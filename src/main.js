import './assets/styles/styles.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/vuex/store.js';

const app = createApp(App)

app.use(router)
app.use(store);
app.mount('#app')
