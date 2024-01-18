import { userStore } from '@/store';
import request from '@/api';
import { MessagePlugin } from 'tdesign-vue-next';

/**
 * 获取用户信息
 */
export const isLogin = () => {
  let user = null;
  try {
    user = JSON.parse(localStorage.getItem('user') || 'null');
  } catch {}
  if (!user) return false;

  const useUser = userStore();
  useUser.setUser({ name: user.name });
  return true;
};

/**
 * 用户登录
 * @param name
 * @param password
 */
export const login = async (name: string, password: string) => {
  if (!name || !password) {
    MessagePlugin.error('账号密码不能为空').then();
    return Promise.reject();
  }

  await request.login.login({ data: { user: name, password } });
  const useUser = userStore();
  useUser.setUser({ name });
  localStorage.setItem('user', JSON.stringify({ name }));
  MessagePlugin.success('登录成功').then();
  return Promise.resolve();
};

/**
 * 退出登录
 */
export const logout = () => {
  const useUser = userStore();
  localStorage.removeItem('user');
  useUser.setUser({ name: '' });
};
