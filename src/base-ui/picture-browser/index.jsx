// import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import { BrowserWrapper } from './style'
import IconClose from '@/assets/svg/icon-close'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import Indicator from '../indicator'
import IconTriangleArrowBottom from '@/assets/svg/icon-triangle-arrow-bottom'
import IconTriangleArrowTop from '@/assets/svg/icon-triangle-arrow-top'
import classNames from 'classnames'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

const PictureBrowser = memo((props) => {
  const { closeBtn, pictureUrls } = props
  const [isNext, setNext] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showList, setShowList] = useState(true)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  })

  function closeBtnClickHandle() {
    if (closeBtn) {
      closeBtn()
    }
  }

  function controlClickHandle(isNext = true) {
    let newIndex = isNext ? currentIndex + 1 : currentIndex - 1
    if (newIndex < 0) newIndex = pictureUrls.length - 1
    if (newIndex > pictureUrls.length - 1) newIndex = 0

    setCurrentIndex(newIndex)
    setNext(isNext)
  }

  function bottomItemClickHandle(index) {
    setNext(index > currentIndex)

    setCurrentIndex(index)
  }

  return (
    <BrowserWrapper $isNext={isNext} $showList={showList}>
      <div className='top'>
        <div className='close-btn' onClick={closeBtnClickHandle}>
          <IconClose />
        </div>
      </div>
      <div className='slider'>
        <div className='control'>
          <div className='btn left' onClick={e => controlClickHandle(false)}>
            <IconArrowLeft width="77" height="77" />
          </div>
          <div className='btn right' onClick={e => controlClickHandle(true)}>
            <IconArrowRight width="77" height="77" />
          </div>
        </div>
        <div className='picture'>
          <SwitchTransition mode='in-out'>
            <CSSTransition
              key={pictureUrls[currentIndex]}
              classNames="pic"
              timeout={200}
            >
              <img src={pictureUrls[currentIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>

        </div>
      </div>
      <div className='preview'>
        <div className='info'>
          <div className='desc'>
            <div className='count'>
              <span>{currentIndex + 1}/{pictureUrls.length}:</span>
              <span>room apartment图片{currentIndex + 1}</span>
            </div>
            <div className='toggle' onClick={e => setShowList(!showList)}>
              <span>{showList ? "隐藏" : "显示"}照片列表</span>
              {showList ? <IconTriangleArrowBottom /> : <IconTriangleArrowTop />}
            </div>
          </div>
          <div className='list'>
            <Indicator selectIndex={currentIndex}>
              {
                pictureUrls.map((item, index) => {
                  return (
                    <div
                      className={classNames("item", { active: currentIndex === index })}
                      key={item}
                      onClick={e => bottomItemClickHandle(index)}
                    >
                      <img src={item} alt="" />
                    </div>
                  )
                })
              }
            </Indicator>
          </div>
        </div>
      </div>
    </BrowserWrapper>
  )
})

PictureBrowser.propTypes = {}

export default PictureBrowser