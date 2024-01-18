import type { RouteRecordRaw } from 'vue-router';

export const basicRoutes: Array<RouteRecordRaw> = [
  {
    name: 'login',
    component: () => import('@/pages/login/index.vue'),
    path: '/login',
  },
  {
    name: '403',
    component: () => import('@/pages/result/403.vue'),
    path: '/403',
  },
  {
    name: '500',
    component: () => import('@/pages/result/500.vue'),
    path: '/500',
  },
  {
    name: '网络错误',
    component: () => import('@/pages/result/NetworkError.vue'),
    path: '/networkError',
  },
  {
    name: '404',
    component: () => import('@/pages/result/404.vue'),
    path: '/:pathMatch(.*)*',
  },
];

export default basicRoutes;
