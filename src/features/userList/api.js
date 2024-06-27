import http from "../../app/http";
import { getCookie } from "../../utils/util";
import friendSlice from "./friendSlice";

export const userListApi = () => async (dispatch) => {
  dispatch(friendSlice.actions.getFriend());
  try {
    const res = await http.get("/api/user-list/?page_size=999&page=1", {
      headers: { Authorization: getCookie("authToken") },
    });
    dispatch(friendSlice.actions.getFriendSuccess(res?.data));
  } catch (e) {
    dispatch(friendSlice.actions.getFriendFail(e?.data));
  }
};
