import React, { memo, useEffect, useState } from 'react'
import { RightWrapper } from './style.js'
import IconGlobal from '@/assets/svg/icon_global.jsx'
import IconMenu from '@/assets/svg/icon_menu.jsx'
import IconAvatar from '@/assets/svg/icon_avatar.jsx'
const HeaderRight = memo(() => {
  const [showPanel, setShowPanel] = useState(false)

  // 监听全局的取消面板
  useEffect(() => {
    function windowHandleClick() {
      setShowPanel(false)
    }

    // true 标识捕获
    window.addEventListener('click', windowHandleClick, true)
    return () => {
      window.removeEventListener('click', windowHandleClick, true)
    }
  }, [])

  function profileClickHandle() {
    setShowPanel(true)
  }

  return (
    <RightWrapper>
      <div className='btns'>
        <span className='btn'>登录</span>
        <span className='btn'>注册</span>
        <span className='btn'>
          <IconGlobal />
        </span>
        <div className='profile' onClick={profileClickHandle}>
          <IconMenu />
          <IconAvatar />
          {
            showPanel && <div className='panel'>
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
          }
        </div>
      </div>
    </RightWrapper>
  )
})

export default HeaderRight