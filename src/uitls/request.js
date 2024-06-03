import axios from 'axios'
import { useUserStore } from '@/stores'
import { ElMessage } from 'pinia'
import router from '@/router'
const instance = axios.create({
  baseURL: 'https://big-event-vue-api-t.itheima.net', //基地址
  timeout: 1000 //超时时间
})
// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    //TODO 携带token
    const userStore = useUserStore()
    if (userStore.token) {
      config.headers.Authorization = userStore.token
    }
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    if (response.data.code === 0) {
      return
    }
    //处理业务失败
    //给错误提示
    ElMessage.error(response.data.message || '服务异常')
    return Promise.reject(response.data)
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    //401 权限不够 token登录过期应该拦截到登录界面
    if (error.response.status === 401) {
      router.push('/longin')
    }
    //错误的默认情况
    ElMessage.error(error.response.data.message || '服务异常')
    return Promise.reject(error)
  }
)

export default instance
