// stores/counter.js
import { defineStore } from 'pinia'

const useUserInfo = defineStore('UserInfo', {
  state: () => {
    return {
      UserInfo: { 
        name: "Zhang San"
      }
    }
  },
  // 也可以这样定义
  // state: () => ({ count: 0 })
  actions: {
    UpdataUserInfo(data:any) {
      this.UserInfo = data
    },

    getters:{},
    // persist: true, 默认将整个UserInfo持久化存储
    persist: {
      key: 'UserInfo', //存储名称
      storage: localStorage, // 存储方式
      paths: ['UserInfo'], //指定 state 中哪些数据需要被持久化。[] 表示不持久化任何状态，undefined 或 null 表示持久化整个 state
    }
  },
})

export default useUserInfo