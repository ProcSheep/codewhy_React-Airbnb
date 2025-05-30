import { configureStore } from '@reduxjs/toolkit'
import mainReducer from './modules/main'
import homeReducer from './modules/home' // RTK(redux/toolkit)
import entireReducer from './modules/entire' // 普通redux
import detailReducer from './modules/detail'

// 支持所有的reducer函数(RTK/普通模式)
const store = configureStore({
  reducer: {
    home: homeReducer,
    entire: entireReducer,
    detail: detailReducer,
    main: mainReducer
  }
})

export default store