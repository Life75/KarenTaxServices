import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
//import { createRouter } from 'vue-router'
import router from "./router/router"


createApp(App).use(router).mount('#app')
