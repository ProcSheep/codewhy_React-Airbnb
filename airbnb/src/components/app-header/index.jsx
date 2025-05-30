import React, { memo, useRef, useState } from 'react'
import { Provider, shallowEqual, useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import { HeaderWrapper, SearchAreaWrapper } from './style'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import HeaderLeft from './header-left'
import HeaderCenter from './header-center'
import HeaderRight from './header-right'
import classNames from 'classnames'


const AppHeader = memo(() => {
  /** 定义内部组件状态 */
  const [isSearch, setIsSearch] = useState(false)

  // 处理header的样式(从store中获取css样式的指导)
  const { headerConfig } = useSelector((state) => ({
    headerConfig: state.main.headerConfig
  }), shallowEqual)
  const { isFixed, topAlpha } = headerConfig

  /** hooks监听窗口滚动 */
  const { scrollY } = useScrollPosition()
  const preY = useRef(0)
  // 在正常滚动情况下,一直记录scrollY
  if (!isSearch) preY.current = scrollY
  // 在弹出搜索框的情况下,滚动距离大于之前记录距离30px,退出搜索模式收回搜索框
  if (isSearch && Math.abs(scrollY - preY.current) > 30) setIsSearch(false)

  /** 透明度逻辑 */
  const isAlpha = topAlpha && scrollY === 0
  // console.log(isAlpha)


  return (
    <ThemeProvider theme={{isAlpha}}>
      <HeaderWrapper className={classNames({ fixed: isFixed })}>
        <div className='content'>
          <div className='top'>
            <HeaderLeft />
            <HeaderCenter isSearch={ isAlpha || isSearch} searchBarClick={e => setIsSearch(true)} />
            <HeaderRight />
          </div>
          {/* 有动画,它不可以和cover一样直接显示/消失 */}
          <SearchAreaWrapper $isSearch={isSearch} />
        </div>
        {isSearch && <div className='cover' onClick={e => setIsSearch(false)}></div>}
      </HeaderWrapper>
    </ThemeProvider>
  )
})

export default AppHeader