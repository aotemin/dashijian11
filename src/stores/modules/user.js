import { ref } from 'vue'
import { defineStore } from 'pinia'

//用户模块token    setToken    removeToken
export const useUserStore = defineStore(
  'big-user',
  () => {
    const token = ref('')

    const setToken = (newToken) => {
      token.value = newToken
    }

    const removeToken = () => {
      token.value = ''
    }

    //不要忘了对外开放
    return {
      token,
      setToken,
      removeToken
    }
  },
  {
    persist: true
  }
)
