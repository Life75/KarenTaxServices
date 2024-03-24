import { createWebHistory, createRouter } from 'vue-router'
import CustomerView from '../components/CustomerView.vue'
import SignIn from "../components/SignIn.vue"


const routes = [
  { path: '/', component: CustomerView },
  { path: '/SignIn', name: "SignIn", component: SignIn}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router