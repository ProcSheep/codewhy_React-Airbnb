import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef } from 'react'

import { IndicatorWrapper } from './style'

const Indicator = memo((props) => {
  const {selectIndex = 0} = props
  // 获取names数组不必通过父传子,因为它是插槽传入进来的,所以使用ref直接对插槽内的元素进行获取即可
  const contentRef = useRef()

  useEffect(() => {
    // 1.获取选中的元素
    const selectItemEl = contentRef.current.children[selectIndex]
    const itemLeft = selectItemEl.offsetLeft // 获取offsetLeft记得给父元素加定位(relative)
    const itemWidth = selectItemEl.clientWidth // 选中item宽度
    const contentWidth = contentRef.current.clientWidth // indicator宽度(也是轮播的可视区域)
    const contentScroll = contentRef.current.scrollWidth // 总共可以移动的距离(包含溢出隐藏的部分,即整个轮播长度)
    // console.log(itemLeft,itemWidth,contentWidth)
    // 2.最终要滚动的宽度,根据算法效果图 
    let distance = itemLeft + itemWidth * 0.5 - contentWidth * 0.5
    /** 3.部分item不可以居中的情况 
     * 3.1 当dis为负数带入公式 ${-dis}px -> 正数 -> 向右移动居中, 说明左侧会空出一块空白 
     * 3.2 当dis运动距离大于总共可移动距离时,让其等于最大移动距离,否则右侧会有空白,必须结合效果图理解!
    */
  
    if(distance < 0) distance = 0 // 3.1 左边特殊情况
    const totalDistance = contentScroll - contentWidth  
    if(distance > totalDistance) distance = totalDistance // 3.2 右边特殊情况
    // 4.向左边滚动,负号写在${}里面作为js代码会计算(比如负负得正),写在外面当作字符串就只会拼接,计算会出错误
    contentRef.current.style.transform = `translate(${-distance}px)` 
  },[selectIndex])

  return (
    <IndicatorWrapper>
    {/* 插槽,接受指示器的数据展示,可以是任意的元素,小图标,大图片,数字,按钮,div等等; 封装的组件具有通用性,你传入什么作为指示器都可以 */}
      <div className='i-content' ref={contentRef}>
        {
          props.children
        }
      </div>
    </IndicatorWrapper>
  )
})

Indicator.propTypes = {
  selectIndex: PropTypes.number
}

export default Indicator