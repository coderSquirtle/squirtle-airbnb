import { getEntireRoomList } from "@/services/modules/entire";
import {
  CHANGE_CURRENT_PAGE,
  CHANGE_IS_LOADING,
  CHANGE_ROOM_LIST,
  CHANGE_TOTAL_COUNT,
} from "./constarts";

export const changeCurrentPage = (currentPage) => {
  return { type: CHANGE_CURRENT_PAGE, currentPage };
};
export const changeRoomListAction = (roomList) => {
  console.log({
    type: CHANGE_ROOM_LIST,
    roomList,
  });
  return {
    type: CHANGE_ROOM_LIST,
    roomList,
  };
};

export const changeTotalCountAction = (totalCount) => {
  return {
    type: CHANGE_TOTAL_COUNT,
    totalCount,
  };
};

export const change_is_loading = (isLoading) => {
  return {
    type: CHANGE_IS_LOADING,
    isLoading,
  };
};

export const fetchRoomListAction = (page = 0) => {
  // console.log(1111111);
  return async (dispatch, getState) => {
    dispatch(changeCurrentPage(page));
    // console.log(page);
    dispatch(change_is_loading(true));
    const res = await getEntireRoomList(page * 20);
    dispatch(change_is_loading(false));

    dispatch(changeRoomListAction(res.list));

    dispatch(changeTotalCountAction(res.totalCount));
  };
};
