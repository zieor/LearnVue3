//import { createRouter, createWebHistory } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const router = createRouter({
  history: createWebHashHistory (import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/form',
      name: 'WorkForm',
      component: ()=>import('../views/WorkForm.vue'),
    },
    {
      path: '/params',
      name: 'Params',
      component: ()=>import('../views/Params.vue'),
    }
  ],
})

export default router
