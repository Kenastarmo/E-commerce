import { useEffect, useState } from 'react';

import { creatingAxiosInstance } from '../creatingAxiosInstance';


const useFetch = (url) => {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await creatingAxiosInstance.get(url)
        setData(response.data);
        //   console.log(data);
      } catch (error) {
        setError(true);
        console.error('Request failed:', error);

      }
      setLoading(false);
    };

    fetchData();
  }, [url]);

  return { data, error, loading };
}
export default useFetch;
