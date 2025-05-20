import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getHomeGoodPriceData, getHomeHighscoreData } from "@/service";

/** 异步请求数据的函数,记得导出 */
/** 多个异步请求,不建议堆叠await,阻塞显示,同时不建议写多个createAsyncThunk,维护困难
 *  第二个参数,action -> {getState,dispatch}
 *  getState可以获取initialState所有的状态,可以使用,但是如果要修改state,必须通过action函数,不可以直接复制修改!
 */
export const fetchHomeDataAction = createAsyncThunk('fetchHomeData', async (payload, {dispatch}) => {
  getHomeGoodPriceData().then(res => {
    dispatch(changeGoodPriceInfoAction(res)) // 通过action修改state的值
  })
  getHomeHighscoreData().then(res => {
    dispatch(changeHighScoreInfoAction(res)) 
  })
})

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {}
  },
  reducers: {
    changeGoodPriceInfoAction(state,{payload}){
      state.goodPriceInfo = payload
    },
    changeHighScoreInfoAction(state,{payload}){
      state.highScoreInfo = payload
    }
  },
  /** 异步修改state数据 */
  // extraReducers: (builder) => {
  //   /** 处理成功信息 */
  //   builder.addCase(fetchHomeDataAction.fulfilled, (state, {payload}) => {
  //     // console.log('extraReducer',payload)
  //     state.goodPriceInfo = payload
  //   })
    
  //   /** 处理错误信息 */
  //   builder.addCase(fetchHomeDataAction.rejected, (state,action) => {
  //     if(state.err.message){
  //       console.log(action.error)
  //     } 
  //   })
  // }
})

export const {
  changeGoodPriceInfoAction,
  changeHighScoreInfoAction
} = homeSlice.actions
export default homeSlice.reducer