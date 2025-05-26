import * as actionTypes from './constants'

const initialState = {
  totalCount: 0, // 总页数
  currentPage: 0, // 当前的页码
  roomList: [], // 当前页码下对应的房间列表
  isLoading: false // 是否加载中
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_PAGE:
      return {...state,currentPage: action.currentPage}
    case actionTypes.CHANGE_ROOM_LIST:
      return {...state,roomList: action.roomList}
    case actionTypes.CHANGE_TOTAL_COUNT:
      return {...state,totalCount: action.totalCount}
    case actionTypes.CHANGE_IS_LOAFING:
      return {...state,isLoading: action.isLoading}
    default:
      return state
  }
}

export default reducer