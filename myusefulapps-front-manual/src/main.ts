import { createApp } from 'vue'
import './style.css'
// Element-plus组件库
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
//pinia
import pinia from '@/stores/index'
import router from './routers'

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.use(pinia)
app.mount('#app')
