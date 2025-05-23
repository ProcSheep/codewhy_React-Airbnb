import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { TabsWrapper } from './style'
import classNames from 'classnames'
import ScrollView from '@/base-ui/scroll-view'

const SectionTabs = memo((props) => {
  const { tabTitles = [], tabClick } = props
  const [currentIndex, setCurrentIndex] = useState(0)

  /** 测试滚动额外添加的数据 */
  // tabTitles.push('test1')
  // tabTitles.push('test2')
  // tabTitles.push('test3')

  function itemClickHandle(index, item) {
    setCurrentIndex(index)
    // index是索引,item是值(name)
    tabClick(index, item)
  }

  return (
    <TabsWrapper>
      <ScrollView>
        {
          tabTitles.map((item, index) => {
            return (
              <div
                className={classNames('item', { active: index === currentIndex })}
                key={index}
                onClick={e => itemClickHandle(index, item)}
              >
                {item}
              </div>
            )
          })
        }
      </ScrollView>
    </TabsWrapper>
  )
})

// 接受传入的标题列表
SectionTabs.propTypes = {
  tabTitles: PropTypes.array
}

export default SectionTabs