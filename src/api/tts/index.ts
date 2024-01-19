import request from '@/api/request';
import type { IRequestParams } from '@/types/global/request';

export default {
  /**
   * 合成音频
   */
  getPcmBuffer: (options?: IRequestParams): Promise<string> =>
    request.axiosInstance({
      url: `/tts?codec=mav&pid=23476&key=F55C87D4-95C1-4E45-8A2A-B271EAE7BE93&voice_type=1`,
      method: 'GET',
      desc: '合成音频',
      notClassified: true,
      notNotify: true,
      ...options,
    }),
};
