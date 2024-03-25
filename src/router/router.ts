import { createWebHistory, createRouter } from 'vue-router'
import CustomerView from '../components/CustomerView.vue'
import SignIn from "../components/SignIn.vue"
import Requests from '../components/Requests.vue'


const routes = [
  { path: '/', component: CustomerView },
  { path: '/SignIn', name: "SignIn", component: SignIn},
  { path: '/Requests', component: Requests}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router