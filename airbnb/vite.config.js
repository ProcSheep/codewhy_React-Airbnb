import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// alias原理: 别名 + 绝对路径
// 绝对路径由path负责,__dirname会获取当前文件夹下的绝对路径,即/airbnb,再使用resolve进行路径拼接
const resolve = pathName => path.resolve(__dirname, pathName)

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react()
  ],
  resolve: {
    alias: {
      '@': resolve("src"),
      'components': resolve('src/components'),
      'utils': resolve('src/utils')
    }
  }
})
