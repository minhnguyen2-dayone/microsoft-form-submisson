// src/hooks/useAccessToken.ts
import { useQuery } from "@tanstack/react-query";
import { getAccessToken } from "./authApi";

export const useAccessToken = () => {
  return useQuery({
    queryKey: ["access_token"],
    queryFn: getAccessToken,
    staleTime: 1000 * 60 * 50, // Token thường sống 1h, đặt cache 50 phút
  });
};
