import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'

import { PictureWrapper } from './style'
import PictureBrowser from '@/base-ui/picture-browser'

const DetailPictures = memo((props) => {
  const [showBrowser,setShowBrowser] = useState(false)
  /** 获取数据store */
  const { detailInfo } = useSelector((state) => ({
    detailInfo: state.detail.detailInfo
  }), shallowEqual)


  return (
    <PictureWrapper>
      {/* 分为左右,左侧1张图片,右侧4张图片 */}
      <div className='pictures'>
        <div className='left' onClick={e => setShowBrowser(true)}>
          <div className='item'>
            <img src={detailInfo?.picture_urls?.[0]} alt="" />
            <div className='cover'></div>
          </div>
        </div>
        <div className='right'>
          {
            detailInfo?.picture_urls?.slice(1, 5).map(item => {
              return (
                <div className='item' key={item}>
                  <img src={item} alt="" />
                  <div className='cover'></div>
                </div>
              )
            })
          }
        </div>
      </div>
      {/* 显示更多按钮 */}
      <div className='show-btn' onClick={e => setShowBrowser(true)}>显示照片</div>
      {/* 图片浏览器,传递图片参数,传递箭头函数(关闭图片浏览器) */}
      {showBrowser && <PictureBrowser pictureUrls={detailInfo.picture_urls} closeClick={e => setShowBrowser(false)}/>}
    </PictureWrapper>
  )
})

DetailPictures.propTypes = {}

export default DetailPictures