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
