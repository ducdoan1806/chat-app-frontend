import { useQuery } from "@tanstack/react-query";
import { userListApi } from "./api";

export const useUserListQs = () => {
  return useQuery({
    queryKey: ["userList"],
    queryFn: userListApi,
    cacheTime: 1000 * 60 * 60 * 24,
  });
};
