<template>
  <section>
    <t-textarea v-model="text" :maxlength="500" :autosize="{ minRows: 10, maxRows: 10 }" placeholder="请输入文本" />
    <t-button :loading="loading" @click="geneAudio">合成</t-button>
    <AudioPlayer :url="url" />
  </section>
</template>

<script setup lang="tsx" name="creation">
import request from '@/api';
import AudioPlayer from '@/components/audioPlayer/AudioPlayer.vue';

const text = ref('');
const loading = ref(false);
const url = ref('');

const geneAudio = () => {
  if (loading.value) return;

  loading.value = true;
  request.tts
    .getPcmBuffer({ params: { text: text.value } })
    .then((res) => {
      url.value = 'https://tts.woa.com/portal/assets/media/combine01.84aeaf0d.mp3';
    })
    .finally(() => {
      loading.value = false;
    });
};
</script>

<style lang="less" scoped></style>
