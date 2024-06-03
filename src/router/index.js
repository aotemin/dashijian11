import { createRouter, createWebHistory } from 'vue-router'

//createRoutet 创建路由实例
//1，history模式 createWebHistory   地址栏不带#号
//2，hash模式 createWebHashHistory   地址栏带#号
const router = createRouter({
  //路径的前缀
  //这是vite中的环境变量 import.meta.env.BASE_URL指向vite。config.js中的base配置项
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //登录页面
    { path: '/login', component: () => import('@/views/login/LoginPage.vue') },
    {
      path: '/',
      component: () => import('@/views/layout/LayoutContainer.vue'),
      redirect: '/article/manage',
      children: [
        {
          path: '/article/manage',
          component: () => import('@/views/article/ArticleMange.vue')
        },
        {
          path: '/article/channel',
          component: () => import('@/views/article/ArticleChannel.vue')
        },
        {
          path: '/user/avatar',
          component: () => import('@/views/user/UserAvatar.vue')
        },
        {
          path: '/user/passwoerd',
          component: () => import('@/views/user/UserPassword.vue')
        },
        {
          path: '/user/profile',
          component: () => import('@/views/user/UserProfile.vue')
        }
      ]
    }
  ]
})

export default router
