import Indicator from '@/base-ui/indicator'
import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { DemoWrapper } from './style'

const Demo = memo((props) => {
  const names = ['aaa','vvv','bbb','dxs','sde','www','fff','sss']
  const [selectIndex,setSelectIndex] = useState(0) // 记录选中的索引

  /** 事件处理函数 */
  function toggleClickHandle(isNext=true){ // 上/下一个函数
    let newIndex = isNext ? selectIndex + 1 : selectIndex - 1
    if(newIndex < 0) newIndex = names.length - 1
    if(newIndex > names.length - 1) newIndex = 0
    setSelectIndex(newIndex)
  }

  return (
    <DemoWrapper>
      <div className='control'>
        <button onClick={e => toggleClickHandle(false)}>上一个</button>
        <button onClick={e => toggleClickHandle()}>下一个</button>
      </div>
      <div className='list'>
        <Indicator selectIndex={selectIndex}>
          {
            names.map((item,index) => {
              return <button key={index}>{item}</button>
            })
          }
        </Indicator>
      </div>
    </DemoWrapper>
  )
})

Demo.propTypes = {}

export default Demo