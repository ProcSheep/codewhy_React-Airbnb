import PropTypes from 'prop-types'
import React, { memo } from 'react'
// 注意: app-footer也有个这个,不要搞混了
import { FooterWrapper } from './style'
import IconMoreArrow from '@/assets/svg/icon-more-arrow'
import { useNavigate } from 'react-router-dom'

const SectionFooter = memo((props) => {
  const {name} = props 
  let showMessage = "展示全部"
  if(name){
    showMessage = `显示更多${name}房源`
  }

  /** 事件处理函数 */
  const navigate = useNavigate()
  function moreClickHandle(){
    navigate('/entire')
  }
  
  return (
    <FooterWrapper name={name}>
      <div className='info' onClick={moreClickHandle}>
        <div className='text'>{showMessage}</div>
        <IconMoreArrow />
      </div>
    </FooterWrapper>
  )
})

SectionFooter.propTypes = {
  name: PropTypes.string
}

export default SectionFooter