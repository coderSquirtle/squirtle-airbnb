import styled from "styled-components";
import CoverImage from '@/assets/img/cover_01.jpeg'

export const BannerWrapper = styled.div`
  height: 529px;
  /* 两种显示背景的方式 */
  /* background: url(${CoverImage}) center/cover; */
  background: url(${require('@/assets/img/cover_01.jpeg')}) center/cover;
`