// src/api/authApi.ts
import axiosClient from "./axiosClient";

export const getAccessToken = async (): Promise<string> => {
  const response = await axiosClient.get("http://localhost:5000/api/token");
  return response.data.access_token;
};
