<template>
  <router-view />
</template>

<script lang="tsx" setup name="App">
import { getIoaInfo } from '@/utils/userLogin';

// 获取用户信息
getIoaInfo();
</script>

<style>
#App {
  width: 100%;
  height: 100%;
}
</style>
