<template>
  <section style="height: 52px">
    <Player class="audio-player" :volume="props.volume" :style="props.styles" :paused="isPaused">
      <Audio>
        <source :data-src="props.url" />
      </Audio>
      <Ui no-controls>
        <Controls class="controller">
          <PlaybackControl hide-tooltip class="player-icon" />
          <TimeProgress class="time-progress" separator="/" />
          <ScrubberControl class="player-bar" />
          <VolumeControl class="player-volume" hide-tooltip />
        </Controls>
      </Ui>
    </Player>
  </section>
</template>

<script setup lang="tsx" name="audio-player">
// VimeJs API https://vimejs.com/
import '@vime/core/themes/default.css';

import {
  Audio,
  Controls,
  PlaybackControl,
  Player,
  ScrubberControl,
  TimeProgress,
  Ui,
  VolumeControl,
} from '@vime/vue-next';
import type { StyleValue } from 'vue';

interface IProps {
  // 样式覆盖
  styles?: StyleValue;
  // 音频url
  url: string;
  // 音频音量
  volume?: number;
  //是否自动播放
  autoplay?: boolean;
}

const props = withDefaults(defineProps<IProps>(), {
  styles: () => ({}),
  url: () => '',
  volume: () => 50,
  autoplay: () => false,
});
const isPaused = ref(!props.autoplay);
</script>

<style lang="less" scoped>
.audio-player {
  width: 100%;
  --vm-color-white-200: rgba(0, 0, 0, 0.4);
  .controller {
    --vm-controls-bg: #fafafa;
    --vm-controls-border-radius: 40px;

    //icon
    .player-icon,
    .player-volume {
      --vm-icon-fill: #1890ff;
      transform: scale(0.8);
      --vm-icon-transform: scale(1.2);
      --vm-control-focus-bg: #ececec;
    }

    //时间
    .time-progress {
      --vm-time-color: #5a5a5a;
    }

    //进度条
    .player-bar {
      flex: calc(100% - 320px);
      margin: 0 20px;
      --vm-slider-value-color: #1890ff;
      --vm-slider-thumb-bg: #1890ff;
      --vm-slider-track-height: 5px;
    }

    //音量
    .player-volume {
      --vm-slider-value-color: #1890ff;
      --vm-slider-thumb-bg: #1890ff;
    }
  }
}
</style>
