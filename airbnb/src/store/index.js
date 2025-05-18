import { configureStore } from '@reduxjs/toolkit'
import homeReducer from './modules/home' // RTK(redux/toolkit)
import entireReducer from './modules/entire' // 普通redux

// 支持所有的reducer函数(RTK/普通模式)
const store = configureStore({
  reducer: {
    home: homeReducer,
    entire: entireReducer
  }
})

export default store