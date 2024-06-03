//独立维护pinia模块
import { createPinia } from 'pinia'
//仓库持久化
import persist from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(persist)

export default pinia
