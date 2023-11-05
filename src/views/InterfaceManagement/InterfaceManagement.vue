<template>
  <n-drawer v-model:show="showDrawer" :default-width="'100%'" :placement="placement" resizable>
    <n-drawer-content :title="data?.title" :closable="true" native-scrollbar>
      <n-card class="container_head" :segmented="{
        content: true,
        footer: 'soft'
      }">
        <div class="container_content">
          <div>接口地址：{{ data?.interfaceURl }}</div>
          <div>返回格式：{{ data?.responceType }}</div>
          <div>消费积分：{{ data?.consumption }}次</div>
          <div>请求方式：{{ data?.requestType }}</div>
          <div>调用总次数：{{ data?.times }}</div>
          <div>接口状态：{{ data?.interfaceStatus }}</div>
          <div>接口描述：{{ data?.description }}</div>
          <div>请求示例：{{ data?.interfaceURl }}</div>
        </div>


      </n-card>
      <n-card content-style="padding: 20;">
        <n-tabs type="line" size="large" :tabs-padding="20" pane-style="padding: 40px;">
          <n-tab-pane name="API文档">
            <ApiDocument />
          </n-tab-pane>
          <n-tab-pane name="在线调试工具">
            <DebuggingTool :data="data"/>
          </n-tab-pane>
          <n-tab-pane name="错误码参照">
            ROCKLIFE
          </n-tab-pane>
          <n-tab-pane name="示例代码">
            ROCKLIFE
          </n-tab-pane>
        </n-tabs>
      </n-card>
    </n-drawer-content>
  </n-drawer>
</template>

<script setup lang="ts">
import { watch, ref } from "vue";
import DebuggingTool from "./DebuggingTool.vue";
import ApiDocument from "./ApiDocument.vue";
// import { useAudioStore } from "@/store";
interface Iprops {
  active: boolean
  data: any
}


const props = defineProps<Iprops>()

const showDrawer = ref<boolean>(false)


// const audioStore = useAudioStore()
const handleClick = () => {
  showDrawer.value = true

}
watch(() => props.active, (values) => {
  console.log('====================================');
  console.log(123132);
  console.log('====================================');
  handleClick()
})



</script>

<style lang="less" scoped>
.container {
  height: calc(100vh - 73px);
  margin: 12px;
  padding: 24px 100px;
  background: #fff;

  &_head {
    margin-bottom: 24px;
  }

  &_content {
    display: flex;
    flex-wrap: wrap;

    div {
      flex-basis: 400px;
      height: 50px;
    }
  }
}
</style>