import PropTypes from 'prop-types'
import React, { memo, useCallback, useState } from 'react'

import { SectionV2 } from './style'
import SectionHeader from '@/componnents/section-header'
import SectionRooms from '@/componnents/section-rooms'
import SectionTabs from '@/componnents/section-tabs'
import SectionFooter from '@/componnents/section-footer'

const HomeSectionV2 = memo((props) => {
  const { infoData } = props
  console.log(infoData, 222);
  const initState = Object.keys(infoData.dest_list)[0]
  // useState初始化 只对第一次有效
  const [name, setName] = useState(initState)
  const tabNames = infoData.dest_address?.map(item => item.name)
  const tableClickHandle = useCallback(function (index, name) {
    setName(name)
  }, [])


  return (
    <SectionV2>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle}></SectionHeader>
      <SectionTabs tabNames={tabNames} tabClick={tableClickHandle}></SectionTabs>
      <SectionRooms roomList={infoData.dest_list?.[name]} itemWidth={"33.333333%"}></SectionRooms>
      <SectionFooter name={name}></SectionFooter>
    </SectionV2>
  )
})

HomeSectionV2.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV2