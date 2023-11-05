<template>
  <div class="container">
    <div class="container_head">

      <a-input :value="inputvalue" class="container_input" placeholder="没有找到心仪的接口？搜索一下吧" enter-button="搜索" size="large"
        @pressEnter="handlePressEnter" @change="handleInputChange">
        <template #suffix>
          <div class="container_input_audio" @click="handleClick">
            <svg t="1698831774208" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
              p-id="3608" width="32" height="32">
              <path
                d="M512 608 512 608c88 0 160-72 160-160L672 256c0-88-72-160-160-160l0 0c-88 0-160 72-160 160l0 192C352 536 424 608 512 608z"
                p-id="3609" fill="#5C92E8"></path>
              <path
                d="M796.6 492.4c2.7-17.5-9.2-33.8-26.7-36.5-17.5-2.6-33.8 9.3-36.5 26.7C716.6 590.6 621.5 672 512 672c-109.5 0-204.7-81.5-221.4-189.5-2.7-17.5-19.1-29.4-36.5-26.7-17.5 2.7-29.4 19-26.7 36.5 20.2 130.5 124 227.8 252.6 241.8L480 832l-96 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0 0-97.9C672.5 720.1 776.4 622.9 796.6 492.4z"
                p-id="3610" fill="#5C92E8"></path>
            </svg>
          </div>
        </template>

      </a-input>
    </div>
    <div class="container_fotter">
      <n-card v-for="(item, index) in interfaceSquareCard" :key="index" class="container_fotter_card" :title="item.title"
        hoverable @click="handleCardClick(index)">
        <div class="container_fotter_card_content">
          <n-badge :value="item.times" :max="15">
            <n-avatar />
          </n-badge>
          <p>{{ item.description }}</p>
        </div>

      </n-card>

      <InterfaceManagement :active="active" :data="data" />
    </div>
  </div>

  <AudioMask :open="open" />
</template>

<script lang="ts" setup>
import { ref } from "vue";
import AudioMask from "./AudioMask.vue";
import { useAudioStore } from "@/store";
import InterfaceManagement from "../InterfaceManagement/InterfaceManagement.vue";

const audioStore = useAudioStore()

const open = ref<boolean>(false)
const active = ref<boolean>(false)
const inputvalue = ref<string>('')
const data = ref<any>()
const interfaceSquareCard = ref<any>([
  {
    title: '随机土味情话',
    avtar: '',
    description: '获取土味情话',
    interfaceURl: 'https://gateway.qimuu.icu/api/loveTalk',
    times: '647',
    responceType: 'JSON',
    requestType: 'GET',
    interfaceStatus: '已上线',
    consumption: '1'
  },
  {
    title: '天气情况',
    avtar: '',
    description: '获取天气情况',
    interfaceURl: 'https://gateway.qimuu.icu/api/loveTalk',
    times: '120',
    responceType: 'JSON',
    requestType: 'POST',
    interfaceStatus: '已上线',
    consumption: '1'
  }
])

const startRecording = () => {
  const recognition = new webkitSpeechRecognition();
  audioStore.recognition = recognition
  recognition.onresult = (event) => {
    const result = event.results[0][0].transcript;
    audioStore.addAudioText(result)
    setTimeout(() => {
      audioStore.open = false
      inputvalue.value = result
      handlePressEnter()
    }, 700)
  };
  recognition.start();
}

const handleClick = () => {
  audioStore.open = true
  startRecording()
}

const handlePressEnter = () => {
  console.log(23123);
  audioStore.recognition = null
  audioStore.audioText = ''
}

const handleInputChange = (e) => {
  inputvalue.value = e.target.value
}

const handleCardClick = (index: number) => {
  data.value = interfaceSquareCard.value[index]

  active.value = !active.value

}


</script>

<style scoped lang="less">
.container {
  height: calc(100vh - 73px);
  margin: 12px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // background-image: url('../../assets/back.png');

  &_head {
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
  }


  &_input {
    border-radius: 20px !important;
    width: 500px;

    &_audio {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      &&:hover {
        transform: scale(1.2);
      }
    }
  }

  &_fotter {
    height: 80%;
    padding: 24px;
    display: flex;
    flex-wrap: wrap;
    overflow: scroll;

    &_card {
      width: 20%;
      height: 200px;
      margin: 20px;
      cursor: pointer;
    }

  }

}
</style>
