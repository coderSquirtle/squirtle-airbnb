import React, { memo, useCallback } from 'react'
import { RoomsWrapper } from './style'
import { useDispatch, useSelector } from 'react-redux'
import RootItem from '@/componnents/root-item'
import { useNavigate } from 'react-router-dom'
import { changeDetailInfoAction } from '@/store/modules/detail'

const EntireRooms = memo(() => {
  const { roomList, totalCount,isLoading } = useSelector((state) => {
    return {
      roomList: state.entire.roomList,
      totalCount: state.entire.totalCount,
      isLoading:state.entire.isLoading
    }
  })

  const navigate = useNavigate()
  const dispatch = useDispatch() 
  const itemClick =useCallback((item)=>{
    dispatch(changeDetailInfoAction(item))
    navigate('/detail')
  },[navigate,dispatch])

  return (
    <RoomsWrapper>
      <h2 className='title'>{totalCount}多处住所</h2>
      <div className='list'>
        {
          roomList.map((item) => {
            return (
              <RootItem
                itemData={item}
                itemWidth="20%"
                key={item._id}
                itemClick = { itemClick }
              />
            )
          })
        }
      </div>
      { isLoading && <div className='cover'></div>}
    </RoomsWrapper>
  )
})

export default EntireRooms