import PropTypes from 'prop-types'
import React, { memo, useEffect, useState, useRef } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import classNames from 'classnames'

import { PicBrowserWrapper } from './style'
import Indicator from '../indicator'
import IconClose from '@/assets/svg/icon-close'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import IconTriangleTop from '@/assets/svg/icon-triangle-top'
import IconTriangleBottom from '@/assets/svg/icon-triangle-bottom'


const PictureBrowser = memo((props) => {
  const { pictureUrls, closeClick } = props
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isNext,setIsNext] = useState(true)
  const [showList,setShowList] = useState(true)
  const imgRef = useRef(null)

  // 当图片浏览器展示时,关闭浏览器的滚动功能,即删除滚动条
  useEffect(() => {
    document.body.style.overflow = 'hidden' // 删除滚动
    return () => {
      document.body.style.overflow = 'auto' // 有滚动条,离开图片浏览器后,需要恢复滚动条,detail页面是有滚动条的
    }
  }, [])

  /** 事件处理 */
  // 接受父组件关闭图片浏览器的处理函数
  function closeBtnClickHandle() {
    if (closeClick) closeClick()
  }

  function controlBtnClickHandle(isNext = true) {
    let newIndex = isNext ? currentIndex + 1 : currentIndex - 1
    const length = pictureUrls.length - 1
    if (newIndex < 0) newIndex = length
    if (newIndex > length) newIndex = 0
    setCurrentIndex(newIndex)    
    setIsNext(isNext)
  }

  function indicatorClickHandle(index){
    setIsNext(index > currentIndex)
    setCurrentIndex(index)
  }

  return (
    <PicBrowserWrapper $isNext={isNext} $showList={showList}>
      <div className='top'>
        <div className='close-btn' onClick={closeBtnClickHandle}>
          <IconClose />
        </div>
      </div>
      <div className='slider'>
        <div className='control'>
          <div className='btn left' onClick={e => controlBtnClickHandle(false)}> <IconArrowLeft width={77} height={77} /> </div>
          {/* 当前显示的图片 */}
          <div className='picture'>
            {/* 动画切换: 先进后出 */}
            <SwitchTransition mode='in-out'>
              {/* 需要处理findNodeDOM的问题,通过nodeRef属性传入元素的ref对象(issue-918) */}
              <CSSTransition nodeRef={imgRef} key={pictureUrls[currentIndex]} classNames='pic' timeout={200}>
                <img src={pictureUrls[currentIndex]} alt="" ref={imgRef}/>
              </CSSTransition>
            </SwitchTransition>
          </div>
          <div className='btn right' onClick={e => controlBtnClickHandle()}> <IconArrowRight width={77} height={77} /> </div>
        </div>
      </div>
      <div className='preview'>
        {/* 图片轮播指示器indicator */}
        <div className='info'>
          <div className='desc'>
            {/* 图片信息 个数/总个数 */}
            <div className='count'>
              <span>{currentIndex+1}/{pictureUrls.length}</span>
              <span> 图片{currentIndex+1}</span>
            </div>
            <div className='toggle' onClick={e => setShowList(!showList)}>
              <span>{showList ? '隐藏' : '显示' }照片列表</span>
              {showList ? <IconTriangleBottom/> : <IconTriangleTop/>}
            </div>
          </div>
          {/* 指示器的轮播列表,可以是任意的数组 */}
          <div className='list'>
            <Indicator selectIndex={currentIndex}>
              {
                pictureUrls.map((item,index) => {
                  return (
                    <div 
                      className={classNames('item',{active: currentIndex === index})} 
                      key={item}
                      onClick={e => indicatorClickHandle(index)}  
                    >
                      <img src={item} alt="" />
                    </div>
                  )
                })
              }
            </Indicator>
          </div>
        </div>
      </div>
    </PicBrowserWrapper>
  )
})

PictureBrowser.propTypes = {
  pictureUrls: PropTypes.array
}

export default PictureBrowser