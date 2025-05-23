import PropTypes from 'prop-types'
import React, { memo } from 'react'
import Rating from '@mui/material/Rating';

import { ItemWrapper } from './style'

const RoomItem = memo((props) => {
  const { itemData,itemWidth = '25%' } = props
  return (
    <ItemWrapper $verifyColor={itemData?.verify_info?.text_color || '#39576a'} $itemWidth={itemWidth} >
      <div className='inner'>
        <div className='cover'>
          <img src={itemData.picture_url} alt="" />
        </div>
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