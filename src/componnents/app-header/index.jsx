import React, { memo } from 'react'
import { HeaderWrapper } from './style'
import HeaderLeft from './c-cpns/header-left'
import HeaderCenter from './c-cpns/header-center'
import HeaderRight from './c-cpns/header-right'
import { shallowEqual, useSelector } from 'react-redux'
import classNames from 'classnames'

const AppHeader = memo(() => {
  const { headerConfig } = useSelector((state) => {
    return {
      headerConfig: state.main.headerConfig
    }
  }, shallowEqual)

  const { isFixed } = headerConfig

  return (
    <HeaderWrapper className={classNames({ fixed: isFixed })}>
      <HeaderLeft></HeaderLeft>
      <HeaderCenter></HeaderCenter>
      <HeaderRight></HeaderRight>
    </HeaderWrapper>
  )
})

export default AppHeader