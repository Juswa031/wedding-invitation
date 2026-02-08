import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/views/MainPage.vue'
import EnvelopePage from '@/views/EnvelopePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'wedding-invitation', component: EnvelopePage },
    { path: '/details', name: 'wedding-invitation-content', component: MainPage },
  ],
})

export default router
