import React, { memo, useEffect } from 'react'
import { DetailWrapper } from './style'
import DetailPictures from './detail-pictures'
import { useDispatch } from 'react-redux'
import { changeHeaderConfigAction } from '@/store/modules/main'

const Detail = memo(() => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(changeHeaderConfigAction({ isFixed: false }))
  }, [dispatch])

  return (
    <DetailWrapper>
      <DetailPictures></DetailPictures>
    </DetailWrapper>
  )
})

export default Detail