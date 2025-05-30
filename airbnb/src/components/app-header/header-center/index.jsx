import React, { memo, useRef, useState } from 'react'
import { CenterWrapper } from './style'


import IconSearchBar from '@/assets/svg/icon-search-bar'
import SearchTitles from '@/assets/data/search_titles.json'
import SearchTabs from './cpns/search-tabs'
import SearchSections from './cpns/search-sections'
import { CSSTransition } from 'react-transition-group'

const HeaderCenter = memo((props) => {
  const { isSearch, searchBarClick } = props
  const titles = SearchTitles.map(item => item.title)
  const [tabIndex, setTabIndex] = useState(0)
  const barRef = useRef(null)
  const detailRef = useRef(null)

  function searchBarClickHandle() {
    if (searchBarClick) searchBarClick()
  }

  return (
    <CenterWrapper>
      {/* 添加动画后,不需要硬性切换了 */}
      <CSSTransition
        in={!isSearch}
        classNames='bar'
        timeout={250}
        unmountOnExit
        nodeRef={barRef}
      >
        <div className='search-bar' onClick={searchBarClickHandle} ref={barRef}>
          <div className='text'>
            搜索房源和体验
          </div>
          <div className='icon'>
            <IconSearchBar />
          </div>
        </div>
      </CSSTransition>
      <CSSTransition
        in={isSearch}
        classNames='detail'
        timeout={250}
        unmountOnExit
        nodeRef={detailRef}
      >
        <div className='search-detail' ref={detailRef}>
          <SearchTabs titles={titles} tabClick={setTabIndex} />
          {/* 给infos设置定位,使得组件SearchSections显示在正确的位置,仅在组件内设置css不足以让组件在页面居中 */}
          <div className='infos'>
            <SearchSections searchInfos={SearchTitles[tabIndex].searchInfos} />
          </div>
        </div>
      </CSSTransition>
    </CenterWrapper>
  )
})

export default HeaderCenter