import PropTypes from 'prop-types'
import React, { memo, useRef, useState } from 'react'
import { ItemWrapper } from './style'

import { Rating } from '@mui/material'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import { Carousel } from 'antd'
import Indicator from '@/base-ui/indicator'
import classNames from 'classnames'
const RootItem = memo((props) => {
  const { itemData, itemWidth = '25%', itemClick } = props
  const [selectIndex, setSelectIndex] = useState(0)
  const sliderRef = useRef()

  const controlClickHandle = (isRight, e) => {
    if (isRight) {
      sliderRef.current.next()
    } else {
      sliderRef.current.prev()
    }
    // 最新的索引
    let newIndex = isRight ? selectIndex + 1 : selectIndex - 1
    const length = itemData.picture_urls.length
    if (newIndex < 0) newIndex = length - 1
    if (newIndex > length - 1) newIndex = 0

    setSelectIndex(newIndex)

    e.stopPropagation()
  }

  /** 子元素的赋值 */
  const pictureElement = (
    <div className='cover'>
      <img src={itemData.picture_url} alt="" />
    </div>
  )

  const sliderElement = (
    <div className='slider'>
      <div className='control'>
        <div className='btn left' onClick={e => controlClickHandle(false, e)}>
          <IconArrowLeft width="30" height="30" />
        </div>
        <div className='btn right' onClick={e => controlClickHandle(true, e)}>
          <IconArrowRight width="30" height="30" />
        </div>
      </div>
      <div className='indicator'>
        <Indicator selectIndex={selectIndex}>
          {
            itemData?.picture_urls?.map((item, index) => {
              return (
                <div className="item" key={item}>
                  <span className={classNames("dot", { active: selectIndex === index })}></span>
                </div>
              )
            })
          }
        </Indicator>
      </div>
      <Carousel dots={false} ref={sliderRef}>
        {
          itemData?.picture_urls?.map(item => {
            return (
              <div className='cover' key={item}>
                <img src={item} alt="" />
              </div>
            )
          })
        }
      </Carousel>
    </div>
  )

  const itemClickHandle = () => {
    if (itemClick) {
      itemClick(itemData)
    }
  }

  return (
    <ItemWrapper $itemWidth={itemWidth} onClick={itemClickHandle}>
      <div className="inner">
        {/* 为了撑起图片的高度 */}
        {!itemData.picture_urls ? pictureElement : sliderElement}


        {/*   <div className="cover">
          <img src={itemData.picture_url} alt="" />
        </div> */}
        <div className="desc">
          {itemData.verify_info.messages.join(" · ")}
        </div>
        <div className="name">{itemData.name}</div>
        <div className='price'>¥{itemData.price}/晚</div>
        <div className="bottom">
          <Rating value={itemData.star_rating ?? 5}
            precision={0.1}
            readOnly
            sx={{ fontSize: "12px", color: "#00848A", marginRight: "-1px" }} />
          <span className='count'>{itemData.reviews_count}</span>
          {
            itemData.bottom_info && <span className='extra'>·{itemData.bottom_info?.content}</span>
          }
        </div>

      </div>
    </ItemWrapper>
  )
})

RootItem.propTypes = {
  itemData: PropTypes.object,
  itemWidth: PropTypes.string
}

export default RootItem