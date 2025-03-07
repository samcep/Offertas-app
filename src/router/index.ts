import { createRouter, createWebHistory } from 'vue-router'
import MasterView from '../views/MasterView.vue'
import DetailView from '@/views/DetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MasterView,
      children: [
        {
          path: ':id',
          name: 'detail',
          component: DetailView,
          props: true,
        },
      ],
    },
  ],
})

export default router
