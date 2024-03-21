// hooks/useFetch.js
"use client";
import { useState } from "react";
import { http } from "./http";

const useFetch = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (
    url: string,
    method: string,
    requestData: any,
    fn: (val?: any) => void
  ) => {
    setIsLoading(true);
    setError(null);
    try {
      if (method === "GET") {
        await http.get(url);
      } else if (method === "POST") {
        await http.post(url, requestData).then((d) => fn(d.data));
      } else if (method === "PATCH") {
        await http.patch(url, requestData);
      } else if (method === "DELETE") {
        await http.delete(url);
      }
    } catch (error: any) {
      setError(error.response.data.message || error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { error, isLoading, fetchData };
};

export default useFetch;
