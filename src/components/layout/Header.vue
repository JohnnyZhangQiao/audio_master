<template>
  <t-header>
    <t-head-menu theme="dark" :style="props.style">
      <template #logo>
        <!--        <div class="logo-style" @click="router.push('/annotation')">-->
        <!--          <img src="@/assets/images/title.webp" alt="" />-->
        <!--          <div v-if="env?.NODE_ENV === 'test'" class="platform-env">测试</div>-->
        <!--        </div>-->
        <div class="logo-style">
          <a :href="portalSite"><img src="@/assets/images/title.webp" alt="" /></a>
          <div v-if="env?.NODE_ENV === 'test'" class="platform-env">测试</div>
        </div>
      </template>
      <template #operations>
        <div v-show="useEvent.event.loading" class="icon-style">
          <t-icon name="loading" />
        </div>
        <div v-show="!props.toolsHidden.includes('notification')">
          <t-popup placement="bottom-right" show-arrow trigger="click">
            <div class="icon-style">
              <t-icon name="notification-filled" />
            </div>
            <template #content>
              <MessageList />
            </template>
          </t-popup>
        </div>
        <t-dropdown :options="options" :min-column-width="150">
          <div class="user-style">
            <img class="avatar-style" :src="geneAvatar(useUser.state.EngName)" />
            <span>{{ useUser.state.EngName }}</span>
          </div>
        </t-dropdown>
      </template>
    </t-head-menu>
  </t-header>
</template>

<script setup lang="tsx" name="LayoutHeader">
import type { CSSProperties } from 'vue';
import { useRouter } from 'vue-router';

import MessageList from '@/components/notification/MessageList.vue';
import { eventStore, userStore } from '@/store';
import { geneAvatar } from '@/utils/image';

interface IProps {
  /**
   * 要隐藏的工具栏，默认空数组「全展示」
   * notification：通知
   * loading：全局加载锁
   */
  toolsHidden?: Array<'notification' | 'loading'>;
  style?: CSSProperties;
}

const props = withDefaults(defineProps<IProps>(), {
  toolsHidden: () => [],
  style: () => ({}),
});
const env = ref(ENV);
const router = useRouter();
const useUser = userStore();
const useEvent = eventStore();
const options = computed(() => {
  return [
    {
      content: '权限中心',
      value: 1,
      onClick: () => {
        router.push('/auth');
      },
    },
    {
      content: '工具库',
      value: 2,
      onClick: () => {
        router.push('/annotation');
      },
    },
  ];
});
const portalSite = location.origin;
</script>

<style lang="less" scoped>
.logo-style {
  position: relative;
  width: 165px;
  height: 100%;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
  img {
    height: 20px;
    position: absolute;
    top: 50%;
    transform: translate(10px, -50%);
  }
  .platform-env {
    position: absolute;
    right: 0;
    top: 10px;
    padding: 0 5px;
    background-color: #774e35;
    font-size: 12px;
    line-height: 17px;
    font-weight: bold;
    border-radius: 3px;
  }
}
.icon-style {
  padding: 8px;
  line-height: 0;
  font-size: 20px;
  border-radius: 3px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
  }
}
.user-style {
  padding: 3px 10px;
  line-height: 0;
  border-radius: 3px;
  .avatar-style {
    margin-right: 10px;
    width: 30px;
    border-radius: 50%;
    vertical-align: middle;
  }
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
  }
}
</style>
