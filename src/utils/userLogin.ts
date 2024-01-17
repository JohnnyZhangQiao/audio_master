import { userStore } from '@/store';

/**
 * 获取用户信息
 */
export const getIoaInfo = () => {
  const useUser = userStore();
  if (useUser.state.name) return Promise.resolve();

  useUser.setUser({ name: 'admin' });
  return Promise.resolve();
};
