import http from "../../app/http";
import { getCookie } from "../../utils/util";
import messageSlice from "./messageSlice";

export const messageApi =
  ({ page, pageSize, roomId }) =>
  async (dispatch) => {
    dispatch(messageSlice.actions.getMessage());
    try {
      const res = await http.get(
        `/api/message/?room_id=${roomId}&page_size=${pageSize}&page=${page}`,
        {
          headers: { Authorization: getCookie("authToken") },
        }
      );
      dispatch(messageSlice.actions.getMessageSuccess(res?.data));
    } catch (e) {
      dispatch(messageSlice.actions.getMessageFail(e?.response?.data));
    }
  };
