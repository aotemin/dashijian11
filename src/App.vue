<script setup>
// import { useRoute, useRouter } from 'vue-router'
// const router = useRouter()
// const route = useRoute()
// const add = () => {
//   console.log(router, route)
//   router.push('list')
// }
// const home = () => {
//   router.push('/home')
// }
// import { useUserStore } from '@/stores/modules/user'
// const userStore = useUserStore()
</script>

<template>
  <div>
    我是App

    <router-view></router-view>
  </div>
  <!-- 
  <el-button @click="add">首页</el-button>
  <el-button @click="home">搜索页</el-button>
  <p>{{ userStore.token }}</p>
  <el-button @click="userStore.setToken('登录成功')">登录</el-button>
  <el-button @click="userStore.removeToken()">退出</el-button> -->
</template>
