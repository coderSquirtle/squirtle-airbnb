import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionV1 } from './style'

import SectionHeader from '@/componnents/section-header'
import SectionRooms from '@/componnents/section-rooms'
import SectionFooter from '@/componnents/section-footer'
const HomeSectionV1 = memo((props) => {

  const { infoData } = props
  return (
    <SectionV1>
      <SectionHeader title={infoData?.title} subtitle={infoData?.subtitle}></SectionHeader>
      <SectionRooms roomList={infoData?.list} itemWidth={"25%"}></SectionRooms>
      <SectionFooter></SectionFooter>
    </SectionV1>
  )
})

HomeSectionV1.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV1