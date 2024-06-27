import http from "../../app/http";
import { getCookie } from "../../utils/util";

export const userListApi = async () => {
  const res = await http.get("/api/user-list/?page_size=999&page=1", {
    headers: { Authorization: getCookie("authToken") },
  });
  return res.data;
};
