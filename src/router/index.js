import { createRouter, createWebHashHistory } from 'vue-router'
import EnvelopePage from '../views/EnvelopePage.vue'
import MainPage from '../views/MainPage.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'wedding-invitation', component: EnvelopePage },
    { path: '/details', name: 'wedding-invitation-content', component: MainPage },
  ],
})

export default router
