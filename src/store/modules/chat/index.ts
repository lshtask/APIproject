import { defineStore } from 'pinia'
import { defaultState } from './helper'

export const useAudioStore = defineStore('chat-store', {
  state: (): Chat.ChatState => defaultState(),

 

  actions: {
    addAudioText(text: string) {
     this.audioText = text
    },

   

  }})