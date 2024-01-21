import request from '@/api/request';
import type { IRequestParams } from '@/types/global/request';
import type { TLoginRes } from '@/types/login';

export default {
  /**
   * 登录
   */
  login: (options?: IRequestParams): Promise<TLoginRes> =>
    request.axiosInstance({
      url: `/web/tts/login`,
      method: 'POST',
      desc: '登录',
      ...options,
    }),
  /**
   * 修改密码
   * @param options
   */
  changePassword: (options?: IRequestParams) =>
    request.axiosInstance({
      url: `/web/tts/changewd`,
      method: 'POST',
      desc: '修改密码',
      ...options,
    }),
};
