import React, { memo } from 'react'
import { LeftWrapper } from './style'
import LeftLogo from '@/assets/svg/left_logo'
import { useNavigate } from 'react-router-dom'

const HeaderLeft = memo(() => {

  const navigate = useNavigate()
  function logoClickHandle(){
    navigate('/home')
  }

  return (
    <LeftWrapper>
      <div className='left'>
        <div className='logo' onClick={e => logoClickHandle()}><LeftLogo/></div>
        <div className='text'>Airbnb</div>
      </div>
    </LeftWrapper>
  )
})

export default HeaderLeft