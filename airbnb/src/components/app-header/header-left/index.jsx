import React, { memo } from 'react'
import { LeftWrapper } from './style'
import LeftLogo from '@/assets/svg/left_logo'

const HeaderLeft = memo(() => {
  return (
    <LeftWrapper>
      <div className='left'>
        <div className='logo'><LeftLogo/></div>
        <div className='text'>Airbnb</div>
      </div>
    </LeftWrapper>
  )
})

export default HeaderLeft