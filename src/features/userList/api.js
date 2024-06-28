import http from "../../app/http";
import { getCookie } from "../../utils/util";
import friendSlice from "./friendSlice";

export const userListApi =
  ({ page, pageSize, searchQuery }) =>
  async (dispatch) => {
    dispatch(friendSlice.actions.getFriend());
    try {
      const res = await http.get(
        `/api/user-list/?page_size=${pageSize}&page=${page}&search=${searchQuery}`,
        {
          headers: { Authorization: getCookie("authToken") },
        }
      );
      dispatch(friendSlice.actions.getFriendSuccess(res?.data));
    } catch (e) {
      dispatch(friendSlice.actions.getFriendFail(e?.data));
    }
  };
