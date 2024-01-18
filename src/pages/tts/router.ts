import { AudioIcon, ChartBubbleIcon } from 'tdesign-icons-vue-next';
import TTS from './Index.vue';
import { isLogin } from '@/utils/userLogin';
import type { RouteRecordRaw } from 'vue-router';

const ttsRoutes: RouteRecordRaw = {
  path: '/tts',
  name: 'tts',
  component: TTS,
  redirect: '/tts/creation',
  meta: {
    navigation: 'TTS',
    icon: ChartBubbleIcon,
    requireAuth: true,
  },
  beforeEnter: (to, from, next) => {
    /**
     * 这里定义控制台单页应用进入前的导航守卫逻辑
     */
    isLogin() ? next() : next('/login');
  },
  children: [
    {
      path: '/tts/creation',
      name: 'creation',
      component: () => import('@/pages/tts/creation/index.vue'),
      meta: {
        navigation: '对话合成',
        icon: AudioIcon,
        requireAuth: true,
      },
    },
  ],
};

export default ttsRoutes;
