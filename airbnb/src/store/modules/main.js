import { createSlice } from "@reduxjs/toolkit";

export const mainSlice = createSlice({
  name:'main',
  initialState:{
    headerConfig:{
      isFixed: true,
      topAlpha: false
    }
  },
  reducers:{
    changeHeaderConfigAction(state,{payload}){
      state.headerConfig = payload
    }
  }
})

export const { changeHeaderConfigAction } = mainSlice.actions
export default mainSlice.reducer