import React, { memo } from 'react'
import { PaginationWrapper } from './style'
import { useDispatch, useSelector } from 'react-redux'
import { Pagination } from '@mui/material'
import { fetchRoomListAction } from '@/store/modules/entire/createActions'

const EntirePageination = memo(() => {
  const { totalCount, currentPage } = useSelector((state) => {
    return {
      totalCount: state.entire.totalCount,
      currentPage: state.entire.currentPage
    }
  })

  // 小算法:必须掌握
  const totalPage = Math.ceil(totalCount / 20)
  const startCount = currentPage * 20 + 1
  const endCount = (currentPage + 1) * 20

  const disPatch = useDispatch()
  function pageChangeHandle(event,pageCount){
    console.log(pageCount,222);
    disPatch(fetchRoomListAction(pageCount - 1))
  }

  return (
    <PaginationWrapper>
      <div className='info'>
        <Pagination count={totalPage}  onChange={pageChangeHandle}/>
        <div className='desc'>
          第 {startCount} - {endCount} 个房源, 共超过 {totalCount} 个
        </div>
      </div>
    </PaginationWrapper>
  )
})

export default EntirePageination