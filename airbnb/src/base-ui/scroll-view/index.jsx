import React, { memo, useEffect, useRef, useState } from 'react'
import { ViewWrapper } from './style'
import LeftArrowIcon from '@/assets/svg/icon-arrow-left'
import RightArrowIcon from '@/assets/svg/icon-arrow-right'

const ScrollView = memo((props) => {
  /** 定义内容状态 */
  const [showRight,setShowRight] = useState(false) // 右侧按钮显示
  const [showLeft,setShowLeft] = useState(false) // 左侧按钮显示
  const [posIndex,setPosIndex] = useState(0) // 当前item索引
  const totalDistanceRef = useRef() // 保证组件多次渲染下,内部值不会变化
  
  /** 组件渲染完毕,判断是否加载右侧按钮 */
  const scrollContentRef = useRef() // 获取滚动条的dom对象
  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth // 一共可以滚动的长度
    const clientWidth = scrollContentRef.current.clientWidth // 本身占据宽度
    const totalDistance = scrollWidth - clientWidth // 可滚动长度
    totalDistanceRef.current = totalDistance // 记录一下,按钮滚动逻辑函数要用
    setShowRight(totalDistance > 0) // 如果可滚动长度大于0自动设置showRight为true
  },[props.children]) // 如果传入的tabs内容改变,重新判断上面的逻辑

  /** 事件处理函数 */
  function controlClickHandle(isRight){
    const newIndex = isRight ? posIndex + 1 : posIndex - 1 // 只有这里变了,需要判断左/右按钮
    const newEl = scrollContentRef.current.children[newIndex]
    const newElOffsetLeft = newEl.offsetLeft 
    scrollContentRef.current.style.transform = `translate(-${newElOffsetLeft}px)` 
    setPosIndex(newIndex) 
    setShowRight(totalDistanceRef.current > newElOffsetLeft)
    setShowLeft(newElOffsetLeft > 0) 
  }

  // function rightClickHandle() {
  //   const newIndex = posIndex + 1
  //   const newEl = scrollContentRef.current.children[newIndex]
  //   const newElOffsetLeft = newEl.offsetLeft // offsetLeft: 忘记了就搜索MDN,只读属性,当前子元素在其父定位元素内向左偏移的像素数
  //   scrollContentRef.current.style.transform = `translate(-${newElOffsetLeft}px)` // 向左偏移
  //   setPosIndex(newIndex) // 更新新的item索引
  //   /** 是否显示右侧按钮: 不显示 -> ElOffsetLeft(向左滚动距离) > totalDistance(剩余可滚动长度) 
  //    *  totalDistance可以设置useState,但是没必要,因为我们只是要记录它的值,在下面进行比较而已,但是如果使用setTotalDistance会使得整个组件重新渲染
  //    *  所以使用useRef记录它的值,同理posIIndex也是(待)
  //   */
  //   setShowRight(totalDistanceRef.current > newElOffsetLeft)
  //   setShowLeft(newElOffsetLeft > 0) // 只要左边有滚动距离就显示'左侧'按钮
  // }

  // function leftClickHandle(){
    
  // }

  return (
    <ViewWrapper>
      { showLeft && 
        <div className='control left' onClick={e => controlClickHandle(false)}>
          <LeftArrowIcon/>
        </div>
      }
      { showRight && 
        <div className='control right' onClick={e => controlClickHandle(true)}>
          <RightArrowIcon/>
        </div>
      }
      {/* 插槽: 展示的内容 */}
      <div className='scroll'>
        <div className='scroll-content' ref={scrollContentRef}>
            {props.children}
        </div>
      </div>
    </ViewWrapper>
  )
})

export default ScrollView