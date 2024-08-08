import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { LongforWrapper } from './style'
import SectionHeader from '@/componnents/section-header'
import ScrollView from '@/base-ui/srcoll-view'
import LongforItem from '@/componnents/longfor-item'

const HomeLongfor = memo((props) => {
  const { infoData } = props

  return (
    <LongforWrapper>
      <SectionHeader title={ infoData.title } subTitle = { infoData.subTitle }></SectionHeader>
      <ScrollView>
        {
          infoData.list.map(item => {
            return <LongforItem itemData={item} key={item.city}></LongforItem>
          })
        }
      </ScrollView>
    </LongforWrapper>
  )
})

HomeLongfor.propTypes = {
  infoData: PropTypes.object
}

export default HomeLongfor