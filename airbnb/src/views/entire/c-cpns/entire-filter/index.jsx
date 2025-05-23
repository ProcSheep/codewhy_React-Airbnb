import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import classNames from 'classnames'

import { FilterWrapper } from './style'
import filterData from '@/assets/data/filter_data.json'

const EntireFilter = memo((props) => {
  /** 状态管理 */
  const [selectItems,setSelectItems] = useState([])

  /** 事件处理逻辑 */
  function itemClickHandle(item){
    const newItems = [...selectItems] // 不可以在原state上修改
    if(newItems.includes(item)){ // 有数据就删除
      const itemIndex = newItems.findIndex(filterItem => filterItem === item)
      newItems.splice(itemIndex,1)
    }else{ // 没有数据就添加
      newItems.push(item)
    }
    // 更新选中的数组
    setSelectItems(newItems)
  }

  return (
    <FilterWrapper>
      <div className='filter'>
        {
          filterData.map((item,index) => {
            return (
              <div
                className= {classNames('item', {active: selectItems.includes(item)})}
                key={index}
                onClick={e => itemClickHandle(item)}
              >
                {item}
              </div>
            )
          })
        }
      </div>
    </FilterWrapper>
  )
})

EntireFilter.propTypes = {}

export default EntireFilter