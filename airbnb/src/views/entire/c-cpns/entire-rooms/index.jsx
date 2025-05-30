import PropTypes from 'prop-types'
import React, { memo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { RoomsWrapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import RoomItem from '@/components/room-item'
import { changeDetailInfoAction } from '@/store/modules/detail'

const EntireRooms = memo((props) => {
  /** 从redux中获取数据 */
  const {roomList,totalCount,isLoading} = useSelector((state) => ({
    roomList: state.entire.roomList,
    totalCount: state.entire.totalCount,
    isLoading: state.entire.isLoading 
  }),shallowEqual)

  /** 事件处理 */
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const itemClickHandle = useCallback((itemData) => {
      navigate('/detail')
      dispatch(changeDetailInfoAction(itemData))
    },[])
  
  return (
    <RoomsWrapper>
      <h2 className='title'>共{totalCount}住处</h2>
      <div className='list'>
        {
          roomList.map(item => {
            return (
              <RoomItem itemData={item} itemClick={itemClickHandle} itemWidth='20%' key={item._id} />
            )
          })
        }
      </div>
      {/* 蒙版 */}
      {isLoading && <div className='cover'></div>}
    </RoomsWrapper>
  )
})

EntireRooms.propTypes = {}

export default EntireRooms