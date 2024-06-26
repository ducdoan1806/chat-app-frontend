import http from "../../app/http";
import { getCookie } from "../../utils/util";

export const userListApi = async () => {
  const res = await http.get("/api/user-list/", {
    headers: { Authorization: getCookie("authToken") },
  });
  return res.data;
};
