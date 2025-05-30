import React, { memo, useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { EntireWrapper } from './style'
import EntireFilter from './c-cpns/entire-filter'
import EntirePagination from './c-cpns/entire-pagination'
import EntireRooms from './c-cpns/entire-rooms'
import { fetchRoomListAction } from '@/store/modules/entire/createActions'
import { changeHeaderConfigAction } from '@/store/modules/main'

const Entire = memo(() => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchRoomListAction())
    dispatch(changeHeaderConfigAction({isFixed: true, topAlpha: false}))
  },[dispatch])

  return (
    <EntireWrapper>
      <EntireFilter/>
      <EntireRooms/>
      <EntirePagination/>
    </EntireWrapper>
  )
})

export default Entire