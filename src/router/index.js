import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/juan/:id',
      name: 'juan',
      component: () => import('@/views/Juan.vue'),
    },
    {
      path: '/fulano/teclado/mouse',
      name: 'fulano',
      component: () => import('@/views/Fulano.vue'),
    },
  ],
});

export default router;
