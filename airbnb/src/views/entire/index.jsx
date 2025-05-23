import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { EntireWrapper } from './style'
import EntireFilter from './c-cpns/entire-filter'
import EntirePagination from './c-cpns/entire-pagination'
import EntireRooms from './c-cpns/entire-rooms'
import { fetchRoomListAction } from '@/store/modules/entire/createActions'

const Entire = memo(() => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchRoomListAction())
  },[dispatch])

  return (
    <EntireWrapper>
      <EntireFilter/>
      <EntirePagination/>
      <EntireRooms/>
    </EntireWrapper>
  )
})

export default Entire