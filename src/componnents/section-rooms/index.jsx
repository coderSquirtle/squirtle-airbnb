import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { RoomsWrapper } from './style'
import RootItem from '@/componnents/root-item'
const SectionRooms = memo((props) => {
  const { roomList = [], itemWidth } = props

  return (

    <RoomsWrapper>
      <div className="root-list">
        {
          roomList?.slice(0, 8).map(item => {
            return <RootItem itemData={item} key={item.id} itemWidth={itemWidth} ></RootItem>
          })
        }
      </div>
    </RoomsWrapper>
  )
})

SectionRooms.propTypes = {
  roomList: PropTypes.array,
  itemWidth: PropTypes.string
}

export default SectionRooms