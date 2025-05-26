import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import Pagination from '@mui/material/Pagination';

import { PaginationWrapper } from './style'
import { changeCurrentPageAction, fetchRoomListAction } from '@/store/modules/entire/createActions';

const EntirePagination = memo((props) => {
  /** state状态管理 */
  const { totalCount, currentPage, roomList } = useSelector((state) => ({
    totalCount: state.entire.totalCount,
    currentPage: state.entire.currentPage,
    roomList: state.entire.roomList
  }),shallowEqual)

  const startCount = currentPage * 20 + 1
  const endCount = (currentPage + 1) * 20
  const totalPage = Math.ceil(totalCount / 20) // 向上取整,例如 305/20=15.XXX -> 16

  /** 事件处理逻辑 */
  // 默认传递2个参数,默认事件/页码数
  const dispatch = useDispatch()
  function PageChangeHandle(evt,pageCount){
    // 跳转到顶部
    window.scrollTo(0,0)
    // 1.更新最新页码->redux: currentPage
    dispatch(changeCurrentPageAction(pageCount - 1))
    // 2.根据最新的页码请求新的页面数据
    dispatch(fetchRoomListAction())
  }

  return (
    <PaginationWrapper>
      {/* 当请求不到数据时,roomList.length显示为0,转为布尔值,不要显示在页面上 */}
      {
        !!roomList.length && (
          <div className='info'>
            <Pagination count={totalPage} onChange={PageChangeHandle} />
            <div className='desc'>
              {/* 算法: currentPage * 20 + 1 ~ (currentPage + 1) * 20 
                    currentPage: 0  1 - 20 
                    currentPage: 1  21 - 40 
              */}
              第{startCount}-{endCount}个房源,共超过{totalCount}个
            </div>
          </div>
        )
      }
    </PaginationWrapper>
  )
})

EntirePagination.propTypes = {}

export default EntirePagination