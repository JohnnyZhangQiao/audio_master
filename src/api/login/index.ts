import request from '@/api/request';
import type { IRequestParams } from '@/types/global/request';
import type { TLoginRes } from '@/types/login';

export default {
  /**
   * 登录
   */
  login: (options?: IRequestParams): Promise<TLoginRes> =>
    request.axiosInstance({
      url: `/login`,
      method: 'POST',
      desc: '登录',
      ...options,
    }),
};
