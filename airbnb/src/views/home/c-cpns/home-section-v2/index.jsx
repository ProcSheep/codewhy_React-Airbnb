import PropTypes from 'prop-types'
import React, { memo, useCallback, useState } from 'react'

import { SectionV2Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionTabs from '@/components/section-tabs'
import SectionFooter from '@/components/section-footer/idnex'

const HomeSectionV2 = memo((props) => {
  /** 接受props */
  const {infoData} = props
  /** 定义本地state和处理数据 */
  const initialName = Object.keys(infoData.dest_list)[0]
  const [name,setName] = useState(initialName) 
  const tabTitles = infoData.dest_address?.map(item => item.name) 
  /** 事件处理函数 */
  const tabClickHandle = useCallback(function(index,name) {
    setName(name)
  },[])

  return (
    <SectionV2Wrapper>
      <div className='discount'>
        <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
        <SectionTabs tabTitles={tabTitles} tabClick={tabClickHandle}/>
        <SectionRooms roomList={infoData.dest_list?.[name]} itemWidth = '33.33333%'/>
        <SectionFooter name={name}/>
      </div>
    </SectionV2Wrapper>
  )
})

HomeSectionV2.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV2