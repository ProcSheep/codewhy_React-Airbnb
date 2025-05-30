import React, { memo, useEffect } from 'react'

import { DetailWrapper } from './style'
import DetailPictures from './c-cpns/detail-pictures'
import { useDispatch } from 'react-redux'
import { changeHeaderConfigAction } from '@/store/modules/main'

const detail = memo(() => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(changeHeaderConfigAction({isFixed: false, topAlpha: false}))
  },[])
  
  return (
    <DetailWrapper>
      <DetailPictures/>
      {/* DetailInfos 可以自己开发,主要是详情页的信息部分 */}
    </DetailWrapper>
  )
})

export default detail