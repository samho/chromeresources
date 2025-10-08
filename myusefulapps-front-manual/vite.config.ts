import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, 'src')
    }
  },

  server:{
    // 配置代理
    proxy:{
      "/api":{
        target:'http://localhost:8000',//设置代理目标
        changeOrigin:true,//是否改变请求源地址
        rewrite: (path) => path.replace(/^\/api/,''),//将/api 替换成空字符串
      }
    }
  }
})
