import request from '@/api/request';
import type { IRequestParams } from '@/types/global/request';

export default {
  /**
   * 合成音频
   */
  getPcmBuffer: (options?: IRequestParams): Promise<string> =>
    request.axiosInstance({
      url: `/tts`,
      method: 'GET',
      desc: '合成音频',
      notClassified: true,
      notNotify: true,
      ...options,
    }),
};
