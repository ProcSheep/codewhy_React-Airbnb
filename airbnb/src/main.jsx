// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// 路由模式 Hash
import { HashRouter } from 'react-router-dom'
// 组件的异步加载方案
import { Suspense } from 'react'
// store共享
import { Provider } from 'react-redux'

import App from '@/App'
import '@/assets/css/index.css' // 重置css样式
import store from "@/store" // 引入store

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <Suspense fallback='loading' >
    {/* 公开store */}
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </Suspense>
  // </StrictMode>
)
