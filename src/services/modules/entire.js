import hyResquest from "../request";


export function getEntireRoomList(offset = 0, size = 20){
  return hyResquest.get({
    url:'entire/list',
    params:{
      offset,
      size
    }
  })
}