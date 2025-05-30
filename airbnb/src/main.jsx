// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// 路由模式 Hash
import { HashRouter } from 'react-router-dom'
// 组件的异步加载方案
// import { Suspense } from 'react'
// store共享
import { Provider } from 'react-redux'
// styled-components 主题共享
import { ThemeProvider } from 'styled-components'
// antd兼容包,兼容r19
import '@ant-design/v5-patch-for-react-19';

import App from '@/App'
import '@/assets/css/index.css' // 重置css样式
import store from "@/store" // 引入store
import theme from '@/assets/theme' // 引入css主题

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  // <Suspense fallback='loading' >
    <Provider store={store}>
      {/* 公开css主题 theme */}
      <ThemeProvider theme={theme}>
        <HashRouter>
          <App />
        </HashRouter>
      </ThemeProvider>
    </Provider>
  // </Suspense>
  // </StrictMode>
)
