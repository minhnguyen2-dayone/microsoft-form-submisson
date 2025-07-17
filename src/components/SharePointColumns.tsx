// src/components/SharePointColumns.tsx
import { useAccessToken } from "../api/useQuery";

export const SharePointColumns = () => {
  const { data, isLoading, error } = useAccessToken();
  console.log("error", error);

  if (isLoading) return <p>Loading...</p>;
  if (error instanceof Error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h3>SharePoint Columns</h3>
      <ul>
        {/* {data?.map((col: any) => (
          <li key={col.id}>
            <strong>{col.name}</strong> — {col.displayName}
          </li>
        ))} */}
        {data}
      </ul>
    </div>
  );
};
