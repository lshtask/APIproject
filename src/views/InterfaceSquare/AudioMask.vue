<template>
  <div class="container_wrap" v-if="audioStore.open" @click="handleOpenClick">
    <div class="audio">
      <div class="audio_circle">
        <div class="audio_circle_center">
          <svg t="1698825799952" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="7262" width="128" height="128">
            <path
              d="M511.912421 619.789474c88.926316 0 161.684211-72.757895 161.684211-161.684211V161.684211c0-88.926316-72.757895-161.684211-161.684211-161.684211s-161.684211 72.757895-161.68421 161.684211v296.421052c0 88.926316 72.757895 161.684211 161.68421 161.684211z m-53.894737-458.105263c0-29.642105 24.252632-53.894737 53.894737-53.894737s53.894737 24.252632 53.894737 53.894737v296.421052c0 29.642105-24.252632 53.894737-53.894737 53.894737s-53.894737-24.252632-53.894737-53.894737V161.684211z m431.157895 296.421052c0 189.978947-140.8 346.947368-323.368421 373.221053V916.210526h53.894737c29.642105 0 53.894737 24.252632 53.894737 53.894737s-24.252632 53.894737-53.894737 53.894737h-215.578948c-29.642105 0-53.894737-24.252632-53.894736-53.894737s24.252632-53.894737 53.894736-53.894737h53.894737v-84.88421c-182.568421-26.273684-323.368421-183.242105-323.368421-373.221053 0-29.642105 24.252632-53.894737 53.894737-53.894737s53.894737 24.252632 53.894737 53.894737c0 148.884211 120.589474 269.473684 269.473684 269.473684s269.473684-120.589474 269.473684-269.473684c0-29.642105 24.252632-53.894737 53.894737-53.894737s53.894737 24.252632 53.894737 53.894737z"
              fill="#FF4A4A" p-id="7263"></path>
          </svg>
        </div>
      </div>
    </div>
    <div class="audio_footer audio">
      <p v-if="!audioStore.audioText">正在听取中</p>
      <p v-else>{{ audioStore.audioText }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAudioStore } from "@/store";
interface Iprops {
  open: boolean
}
defineProps<Iprops>()

const audioStore = useAudioStore()

const handleOpenClick = () => {
  audioStore.open = false
  audioStore.recognition.stop()
}
</script>

<style lang="less" scoped>
@keyframes audio_center {
  0% {
    transform: scale(0.75);
  }

  20% {
    transform: scale(1);
  }

  40% {
    transform: scale(1.25);
  }

  80% {
    transform: scale(1);
  }

  100% {
    transform: scale(0.75);
  }
}

@keyframes audio_text {
  0% {
    opacity: 0.1;
  }

  50% {
    opacity: 0.5;
  }

  100% {
    opacity: 1;
  }


}



.audio {
  display: flex;
  justify-content: center;
  align-items: center;
}

.audio_circle {
  width: 200px;
  height: 200px;
  border-radius: 100px;
  border: 1px solid rgb(218, 219, 223);
  overflow: hidden;



  &_center {
    height: 200px;
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
    align-content: center;
    animation: audio_center linear 3s infinite;
  }

}

.audio_footer {
  margin-top: 100px;
  font-size: 24px;
  animation: audio_text linear 2s 1;
}

.container_wrap {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  z-index: 99999;
  opacity: 0.8;
  padding: 100px;
}
</style>