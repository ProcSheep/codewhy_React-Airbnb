import PropTypes from 'prop-types'
import React, { memo, useRef, useState } from 'react'
import { Carousel } from 'antd';
import Rating from '@mui/material/Rating';
import classNames from 'classnames';

import { ItemWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';
import Indicator from '@/base-ui/indicator';

const RoomItem = memo((props) => {
  const { itemData, itemWidth = '25%', itemClick } = props
  const [selectIndex, setSelectIndex] = useState(0)
  const swiperRef = useRef()

  // 没有轮播图,单图html (例如 /home)
  const pictureElement = (
    <div className='cover'>
      <img src={itemData.picture_url} alt="" />
    </div>
  )
  // 有轮播图html (例如 /entire)
  const swiperElement = (
    <div className='swiper'>
      {/* 左右箭头 */}
      <div className='control'>
        <div className='btn left' onClick={e => controlClickHandle(false,e)}>
          <IconArrowLeft width='30' height='30' />
        </div>
        <div className='btn right' onClick={e => controlClickHandle(true,e)}>
          <IconArrowRight width='30' height='30' />
        </div>
      </div>
      {/* indicator自定义指示器 */}
      <div className='indicator'>
        <Indicator selectIndex={selectIndex}>
          {
            itemData?.picture_urls?.map((item, index) => {
              return (
                <div className='item' key={item}>
                  <span className={classNames("dot", { active: selectIndex === index })}></span>
                </div>
              )
            })
          }
        </Indicator>
      </div>
      {/* 轮播图 */}
      <Carousel dots={false} ref={swiperRef}>
        {
          itemData?.picture_urls?.map(item => {
            return (
              <div className='cover' key={item}>
                <img src={item} alt="" />
              </div>
            )
          })
        }
      </Carousel>
    </div>
  )

  /** 事件处理逻辑 */
  // 1.跳转上一个/下一个面板
  function controlClickHandle(isRight = true,event) {
    isRight ? swiperRef.current.next() : swiperRef.current.prev()
    let newIndex = isRight ? selectIndex + 1 : selectIndex - 1
    let length = itemData.picture_urls.length
    if (newIndex < 0) newIndex = length - 1
    if (newIndex > length - 1) newIndex = 0
    setSelectIndex(newIndex)
    // 阻止事件冒泡
    event.stopPropagation()
  }

  // 2.接受传入的跳转函数,如果有传入就执行,没有传入就不执行任何事情
  function itemClickHandle(){
    if(itemClick) itemClick(itemData)
  }

  return (
    <ItemWrapper $verifyColor={itemData?.verify_info?.text_color || '#39576a'} $itemWidth={itemWidth} onClick={itemClickHandle}>
      <div className='inner'>
        {/* 判断是不是轮播图样式的item,只需判断itemData.picture_urls有没有值 */}
        { itemData.picture_urls ? swiperElement : pictureElement }
        <div className='desc'>
          {
            itemData.verify_info.messages.join("-")
          }
        </div>
        <div className='name'>{itemData.name}</div>
        <div className='price'>￥{itemData.price}/晚</div>
        <div className='bottom'>
          {/* sx: 设置新的样式覆盖旧的样式 
              precision: 精准度,精确到0.1
              ??: 更加严谨,只有前面数据为Null或Undefined时才会执行后面的
              不使用'||'为了防止出现 0 || 4.5 => 4.5的情况,对0也默认执行后面
          */}
          <Rating
            value={itemData.star_rating ?? 4.5}
            precision={0.1}
            size="small"
            sx={{ fontSize: '12px', color: '#00848A' }}
            readOnly
          />
          <span className='count'>浏览量:{itemData.reviews_count}</span>
          {
            itemData.bottom_info && <span className='extra'>-{itemData.bottom_info?.content}</span>
          }
        </div>
      </div>
    </ItemWrapper>
  )
})

RoomItem.propTypes = {
  itemData: PropTypes.object
}

export default RoomItem