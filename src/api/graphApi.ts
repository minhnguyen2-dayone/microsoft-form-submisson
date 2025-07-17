// src/api/graphApi.ts
import axiosClient from "./axiosClient";

export const getSharePointColumns = async (accessToken: string) => {
  const siteId =
    "dayoneteams.sharepoint.com,60092906-2596-4a87-b51b-e84a76a902f9,c779e6a7-ed47-4c05-a5e6-73b49f52b4b3";
  const listId = "8ef11bc7-0af4-4a9f-b8e1-ab0cb6e427e9";

  const response = await axiosClient.get(
    `https://graph.microsoft.com/v1.0/sites/${siteId}/lists/${listId}/columns`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  return response.data.value;
};
