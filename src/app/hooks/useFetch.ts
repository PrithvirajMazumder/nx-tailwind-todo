import { useCallback, useEffect, useState } from "react";
import useToast from "@/hooks/useToast";

type useFetchOutput<T> = [T | null, boolean, unknown | any, () => Promise<any>];
const useFetch = <T>(callBack: () => Promise<T>): useFetchOutput<T> => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<unknown | any>(null);
  const [data, setData] = useState<T | null>(null);
  const toast = useToast();

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const data = await callBack();
      setData(data);
    } catch (e) {
      setHasError(e);
      toast.error('failed to fetch 🥲');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refresh = useCallback(fetchData, []);

  return [data, isLoading, hasError, refresh];
};

export default useFetch;