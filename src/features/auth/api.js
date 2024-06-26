import http from "../../app/http";
import { CLIENT_ID, CLIENT_SECRET, GRANT_TYPE } from "../../utils/const";
import { getCookie } from "../../utils/util";

export const loginApi = async (info) => {
  const res = await http.post(
    "/o/token/",
    JSON.stringify({
      grant_type: GRANT_TYPE,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      username: info.username.trim(),
      password: info.password.trim(),
    })
  );
  return res.data;
};
export const getUserApi = async () => {
  const res = await http.get("/api/user/", {
    headers: { Authorization: getCookie("authToken") },
  });
  return res.data;
};
