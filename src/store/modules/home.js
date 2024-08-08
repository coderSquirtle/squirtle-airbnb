import {
  getHomeGoodPriceData,
  getHomeHighScoreData,
  getHomeDiscountData,
  getHomeHotRecommenData,
  getHomeLongforData,
  getHomePlusData,
} from "@/services";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchHomeDataAction = createAsyncThunk(
  "fetch",
  (payload, { dispatch }) => {
    getHomeGoodPriceData().then((res) => {
      dispatch(changeGoodPriceInfoAction(res));
    });

    getHomeHighScoreData().then((res) => {
      dispatch(changeHighScoreInfoAction(res));
    });

    getHomeDiscountData().then((res) => {
      dispatch(changeDiscountInfoAction(res));
    });

    getHomeHotRecommenData().then((res) => {
      dispatch(changeHotRecommenAction(res));
    });
    getHomeLongforData().then((res) => {
      dispatch(changeLomgInfoAction(res));
    });
    getHomePlusData().then((res) => {
      dispatch(changePlusInfoAction(res));
    });
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    hotRecommenInfo: {},
    longforInfo:{},
    plusInfo:{}
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload;
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload;
    },
    changeDiscountInfoAction(state, { payload }) {
      state.discountInfo = payload;
    },
    changeHotRecommenAction(state, { payload }) {
      state.hotRecommenInfo = payload;
    },
    changeLomgInfoAction(state,{payload}){
      state.longforInfo = payload
    },
    changePlusInfoAction(state,{payload}){
      state.plusInfo = payload
    }
  },
});

export const {
  changeGoodPriceInfoAction,
  changeHighScoreInfoAction,
  changeDiscountInfoAction,
  changeHotRecommenAction,
  changeLomgInfoAction,
  changePlusInfoAction,
} = homeSlice.actions;

export default homeSlice.reducer;
