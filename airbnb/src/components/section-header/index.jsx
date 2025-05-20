import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { HeaderWrapper } from './style'

const SectionHeader = memo((props) => {
  // const {title,subtitle = '默认子标题'} = props
  const {title,subtitle} = props

  return (
    <HeaderWrapper>
      <h2 className='title'>{title}</h2>
      {subtitle && <div className='subtitle'>{subtitle}</div>}
    </HeaderWrapper>
  )
})

// 类型验证
SectionHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default SectionHeader