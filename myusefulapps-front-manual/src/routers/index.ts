// 路由配置
import { createRouter, createWebHistory} from 'vue-router'

// 首页
import HomeView from '@/views/Home/index.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 路由守卫
// router.beforeEach((to, from, next) => {
//   next()
// })

export default router