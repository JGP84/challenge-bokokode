import { useEffect, useState } from "react";
import axios from "axios";

function useFetch( url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .post(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  const refetch = () => {
    setLoading(true);
    axios
      .post(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const getFeaturedProduct  = () => {

    const products = data.data.data

    const result = products.filter( product => product.featured === true )

    /* const result = data */
    console.log( "result", result)
  
  } 

  return { data, loading, error, refetch, getFeaturedProduct };
}

export default useFetch;
