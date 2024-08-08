import React, { memo } from 'react'
import { LeftWrapper } from './style.js'

import IconLogo from '@/assets/svg/icon_logo.jsx'
const HeaderLeft = memo(() => {
  return (
    <LeftWrapper>
      {/* <div>HeaderLeft</div>
       */}
      <div className="logo">
        <IconLogo></IconLogo>
      </div>
    </LeftWrapper>

  )
})

export default HeaderLeft