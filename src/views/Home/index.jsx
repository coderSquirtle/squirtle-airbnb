import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'


import HomeSectionV1 from './c-cpns/home-section-v1'
import { fetchHomeDataAction } from '@/store/modules/home'
import HomeSectionV2 from './c-cpns/home-section-v2'
import { isEmptyO } from '@/utils'
import HomeLongfor from './c-cpns/home-longfor'
import HomeSectionV3 from './c-cpns/home-section-v3'
import { changeHeaderConfigAction } from '@/store/modules/main'


const Home = memo(() => {
  const { goodPriceInfo, highScoreInfo, discountInfo, hotRecommenInfo, longforInfo, plusInfo } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo,
    hotRecommenInfo: state.home.hotRecommenInfo,
    longforInfo: state.home.longforInfo,
    plusInfo: state.home.plusInfo
  }), shallowEqual)



  // 派发事件 进行网络请求
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
    dispatch(changeHeaderConfigAction({isFixed:true}))
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner></HomeBanner>
      8888888
      <div className="content">
        {/*     <SectionHeader title={discountInfo.title} subtitle={discountInfo.subtitle}></SectionHeader>
        <SectionTabs tabNames={tabNames} tabClick = { tableClickHandle }></SectionTabs>
        <SectionRooms roomList={discountInfo.dest_list?.[name]} itemWidth={"33.333333%"}></SectionRooms> */}
        {isEmptyO(discountInfo) && <HomeSectionV2 infoData={discountInfo}></HomeSectionV2>}
        {isEmptyO(hotRecommenInfo) && <HomeSectionV2 infoData={hotRecommenInfo}></HomeSectionV2>}
        {isEmptyO(longforInfo) && <HomeLongfor infoData={longforInfo}></HomeLongfor>}
        {isEmptyO(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo} />}
        {isEmptyO(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo} />}
        {isEmptyO(plusInfo) && <HomeSectionV3 infoData={plusInfo} />}

      </div>
    </HomeWrapper>
  )
})

export default Home