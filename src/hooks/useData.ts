import { useState, useEffect } from 'react';
const REFRESH_INTERVAL = 1000*60;

const useData = (fetchFunction: Function) => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const updateData = async () => setData(await fetchFunction());
    updateData();
    const interval = setInterval(async () => await updateData(), REFRESH_INTERVAL);
    return () => clearInterval(interval);
  }, [fetchFunction]);

  return data;
};

export default useData;