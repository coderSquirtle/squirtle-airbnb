import React, { memo, useEffect } from 'react'
import { EntireWrapper } from './style'
import EntireFilter from './c-cpns/entire-filter'
import { useDispatch } from 'react-redux'
import { fetchRoomListAction } from '@/store/modules/entire/createActions'
import EntireRooms from './c-cpns/entire-rooms'
import EntirePageination from './c-cpns/entire-pagination'
import { changeHeaderConfigAction } from '@/store/modules/main'


const Entire = memo(() => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchRoomListAction())
    dispatch(changeHeaderConfigAction({isFixed:true}))
  }, [dispatch])

  return (
    <EntireWrapper>
      <EntireFilter></EntireFilter>
      <EntireRooms></EntireRooms>
      <EntirePageination></EntirePageination>
    </EntireWrapper>
  )
})

export default Entire