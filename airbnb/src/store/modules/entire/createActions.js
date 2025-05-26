import { getEntireRoomList } from '@/service/modules/entire'
import * as actionTypes from './constants'

export const changeCurrentPageAction = (currentPage) => ({
  type: actionTypes.CHANGE_CURRENT_PAGE,
  currentPage
})

export const changeRoomListAction = (roomList) => ({
  type: actionTypes.CHANGE_ROOM_LIST,
  roomList
})

export const changeTotalCountAction = (totalCount) => ({
  type: actionTypes.CHANGE_TOTAL_COUNT,
  totalCount
})

export const changeIsLoadingAction = (isLoading) => ({
  type: actionTypes.CHANGE_IS_LOAFING,
  isLoading
})


export const fetchRoomListAction = () => {
  return async (dispatch,getState) => {
    /** 根据页码获取请求的偏移量 (一页20个数据)
     *  之后通过分页器控制currentPage的值,从而控制请求数据的偏移量,实现分页器和内容的联动
     *  点击对应的页数,请求对应页的数据并显示
     */
    const currentPage = getState().entire.currentPage
    // 请求网络数据前后, 是否正在加载(isLoading)
    dispatch(changeIsLoadingAction(true))
    const res = await getEntireRoomList(currentPage * 20)
    dispatch(changeIsLoadingAction(false))
    // 将获取的数据保存进store中
    const roomList = res.list
    const totalCount = res.totalCount
    dispatch(changeRoomListAction(roomList))
    dispatch(changeTotalCountAction(totalCount))
  }
}