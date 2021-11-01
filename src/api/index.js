import { useEffect, useState } from "react";

// 自定义统一接口封装 hook
export const useApi = () => {
  const [data, setData] = useState([1, 2, 3, 4, 5]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    (async () => {
      const data = await getList();
      console.log("data", data);
      setData(data);
    })();
  }, [query]);

  return [{ data }, setQuery];
};
