import React, { memo, useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { HomeWrapper } from './style'
import { fetchHomeDataAction } from '@/store/modules/home'
import HomeBanner from './c-cpns/home-banner'
import HomeSectionV1 from './c-cpns/home-section-v1'


const home = memo(() => {
  /** 从redux中获取数据 */
  const { goodPriceInfo,highScoreInfo } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo
  }), shallowEqual)

  /** 派发事件: 发送网络请求,不传参数 */
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
  }, [])

  return (
    <HomeWrapper>
      {/* 轮播图 */}
      <HomeBanner />
      <div className='content'>
        <HomeSectionV1 infoData={goodPriceInfo}/>
        <HomeSectionV1 infoData={highScoreInfo}/>
      </div>
    </HomeWrapper>
  )
})

export default home

