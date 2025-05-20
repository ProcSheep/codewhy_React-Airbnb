import PropTypes from 'prop-types'
import React, { memo } from 'react'

import { RoomWrapper } from './style'
import RoomItem from '@/components/room-item'

const SectionRooms = memo((props) => {
  // 防止异步没有数据,先初始化; 或者?.
  const { roomList = [] } = props
  return (
    <RoomWrapper>
      {
        roomList.slice(0, 8).map(item => {
          return <RoomItem itemData={item} key={item.id} />
        })
      }
    </RoomWrapper>
  )
})

SectionRooms.propTypes = {
  roomList: PropTypes.object
}

export default SectionRooms