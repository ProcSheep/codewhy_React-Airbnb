import React, { memo, useEffect, useState } from 'react'
import { RightWrapper } from './style'
import IconGolbal from '@/assets/svg/icon_global'
import IconMenu from '@/assets/svg/icon_menu'

const HeaderRight = memo(() => {
  /** 定义组件内部状态 */
  // 控制Profile动态面板的显示和隐藏
  const [showPanel, setShowPanel] = useState(false)

  /** 副作用代码 */
  useEffect(() => {
    function windowHandleClick() {
      setShowPanel(false)
    }
    // 添加监听,第二个参数是捕获阶段监听,防止点击profile冒泡到window,误触发了隐藏panel的事件
    window.addEventListener('click', windowHandleClick, true)
    // 取消监听
    return () => {
      window.removeEventListener('click', windowHandleClick)
    }
  }, [])

  /** 事件处理函数 */
  function profileClickHandler() {
    setShowPanel(true)
  }

  return (
    <RightWrapper>
      <div className='btns'>
        <span className='btn'>登录</span>
        <span className='btn'>注册</span>
        <span className='btn'>
          <IconGolbal />
        </span>
      </div>

      <div className='profile' onClick={profileClickHandler}>
        <IconMenu />
        {
          showPanel && (
            <div className='panel'>
              <div className='top'>
                <div className='item register'>注册</div>
                <div className='item login'>登录</div>
              </div>
              <div className='bottom'>
                <div className='item'>出租房源</div>
                <div className='item'>开展体验</div>
                <div className='item'>帮助</div>
              </div>
            </div>
          )
        }
      </div>
    </RightWrapper>
  )
})

export default HeaderRight