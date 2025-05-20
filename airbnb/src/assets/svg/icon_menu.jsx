import React, { memo } from 'react'
import styleStrToObj from './utils'

const IconMenu = memo(() => {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" style={styleStrToObj("display:block;fill:none;height:16px;width:16px;stroke:currentColor;stroke-width:3;overflow:visible")} aria-hidden="true" role="presentation" focusable="false"><g fill="none"><path d="M2 16h28M2 24h28M2 8h28"></path></g></svg>
    </div>
  )
})

export default IconMenu