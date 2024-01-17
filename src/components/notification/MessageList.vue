<template>
  <t-tabs :value="msgTab" theme="normal" class="msg-container">
    <t-tab-panel value="global" label="通知">
      <t-list v-if="msgList.length > 0" class="msg-list" size="small">
        <t-list-item v-for="(item, index) in msgList" :key="index">
          <span style="font-size: 12px">{{ item.content }}</span>
          <template #action>
            <div class="action-btn">标记已读</div>
          </template>
        </t-list-item>
      </t-list>
      <p v-else class="blank-desc">暂无消息</p>
      <div class="msg-footer">
        <div class="action-btn">全部已读</div>
        <div class="action-btn">查看更多</div>
      </div>
    </t-tab-panel>
    <t-tab-panel value="other" label="其他" disabled />
  </t-tabs>
</template>

<script setup lang="tsx" name="MessageList">
const msgTab = ref<string>('global');
const msgList = reactive([]);
</script>

<style lang="less" scoped>
.msg-container {
  width: 280px;
  font-size: 12px;
  .blank-desc {
    text-align: center;
    color: #c8c8c8;
  }
  .msg-footer {
    display: flex;
    justify-content: space-around;
    padding: 5px;
    border-top: 1px solid #f3f3f3;
  }
  .msg-list {
    max-height: 300px;
  }
  .action-btn {
    font-size: 12px;
    cursor: pointer;
    color: #0053d9;
  }
}
</style>
