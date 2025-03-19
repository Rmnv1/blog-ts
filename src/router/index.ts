import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/layouts/default.vue'
import ErrorLayout from '@/layouts/404.vue'
import MainPage from '@/pages/index.vue'
import PostDetail from '@/pages/posts/[id]/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '',
          name: 'Main',
          component: MainPage,
        },

        {
          path: 'posts/:id',
          name: 'PostDetail',
          component: PostDetail,
        },
      ],
    },
    {
      path: '/:catchAll(.*)*',
      component: ErrorLayout,
    },
  ],
})

export default router
