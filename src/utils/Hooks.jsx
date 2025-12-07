import { useState } from "react";

export function useLocalData(name) {
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem(name);
    const parsedData = JSON.parse(savedData);
    return parsedData ? parsedData : [];
  });
  return [data, setData];
}
