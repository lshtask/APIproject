<template>
 
  <div class="center">
    <div>请求参数说明：</div>
    <n-data-table :columns="columns" :data="data" />
  </div>
  <div class="center">
    <div>响应参数说明：</div>
    <n-data-table :columns="columns" :data="data" />
  </div>
  <div class="center">
    <div>返回结果示例：</div>
    <n-empty size="large" description="暂未调用，没有结果展示">
      <template #extra>

      </template>
    </n-empty>
  </div>
</template>

<script setup lang="ts">
import { h, ref } from 'vue'
import { NInput } from 'naive-ui'

interface Iprops {
  data: any
}
const props = defineProps<Iprops>()
const value = ref<string>(props?.data?.interfaceURl)
const data = [
  { name: 3, age: '4:18' },

]
const columns = [
  {
    title: '参数名称',
    key: 'name',
    
  },
  {
    title: '参数值',
    key: 'age',
   
  }

]
</script>

<style scoped lang="less">
.header {
  width: 100%;
  display: flex;
  justify-content: center;

}

.center {
  margin-bottom: 40px;

  div:nth-child(1) {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  div:nth-child(1):before {
    display: block;
    width: 4px;
    height: 16px;
    margin-right: 8px;
    background-color: #1C9346;
    content: '';
  }
}
</style>