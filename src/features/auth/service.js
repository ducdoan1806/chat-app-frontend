import { useMutation, useQuery } from "@tanstack/react-query";
import { getUserApi, loginApi } from "./api";
import { setCookie } from "../../utils/util";

export const useLoginFn = () => {
  return useMutation({
    mutationKey: ["login"],
    mutationFn: loginApi,
    onSuccess: (data) => {
      setCookie({
        value: data?.token_type + " " + data?.access_token,
        days: data?.expires_in,
      });
      window.location.href = "/";
    },
  });
};
export const useUserQs = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: getUserApi,
    throwOnError: () => {
      document.cookie =
        "authToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
      window.location.href = "/auth/login/";
    },
    cacheTime: 1000 * 60 * 60 * 24,
  });
};
