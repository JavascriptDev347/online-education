import { createApp } from 'vue'
import 'ant-design-vue/dist/reset.css';
import './style.scss'
import App from './App.vue'
import Antd from 'ant-design-vue';
import router from './router';
import { createPinia } from 'pinia';
import VueTheMask from "vue-the-mask"

const app = createApp(App);
app.use(createPinia())
app.use(router)
app.use(VueTheMask as any)
app.use(Antd)
app.mount('#app')
