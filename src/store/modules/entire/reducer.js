import {
  CHANGE_CURRENT_PAGE,
  CHANGE_IS_LOADING,
  CHANGE_ROOM_LIST,
  CHANGE_TOTAL_COUNT,
} from "./constarts";

const initialState = {
  currentPage: 0, // 当前页码
  roomList: [], // 房间列表
  totalCount: 0, // 总数据个数
  isLoading: false,
};

function reducer(state = initialState, actions) {
  switch (actions.type) {
    case CHANGE_CURRENT_PAGE:
      return { ...state, currentPage: actions.currentPage };
    case CHANGE_TOTAL_COUNT:
      return { ...state, totalCount: actions.totalCount };
    case CHANGE_ROOM_LIST:
      return { ...state, roomList: actions.roomList };
    case CHANGE_IS_LOADING:
      return { ...state, isLoading: actions.isLoading };
    default:
      return state;
  }
}

export default reducer;
