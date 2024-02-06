import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'a',
      component: () => import('@/views/a.vue')
    },
    {
      path: '/b',
      name: 'b',
      component: () => import('@/views/b.vue')
    }
  ]
})

export default router
