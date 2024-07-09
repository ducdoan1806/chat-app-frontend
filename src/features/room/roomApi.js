import http from "../../app/http";
import { getCookie } from "../../utils/util";
import roomSlice from "./roomSlice";

export const roomApi =
  ({ page, pageSize }) =>
  async (dispatch) => {
    dispatch(roomSlice.actions.getRoom());
    try {
      const res = await http.get(
        `/api/room/?page_size=${pageSize}&page=${page}`,
        {
          headers: { Authorization: getCookie("authToken") },
        }
      );
      dispatch(roomSlice.actions.getRoomSuccess(res?.data));
    } catch (e) {
      dispatch(roomSlice.actions.getRoomFail(e?.data));
    }
  };
export const createRoomApi =
  ({ receiver_id }) =>
  async (dispatch) => {
    dispatch(roomSlice.actions.createRoom());
    try {
      const res = await http.post(
        `/api/room/create-room/`,
        JSON.stringify({ receiver_id }),
        {
          headers: { Authorization: getCookie("authToken") },
        }
      );
      dispatch(roomSlice.actions.createRoomSuccess(res?.data));
    } catch (e) {
      dispatch(roomSlice.actions.createRoomFail(e?.data));
    }
  };
