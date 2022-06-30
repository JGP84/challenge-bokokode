import { useEffect, useState } from "react";
import axios from "axios";

function useFetch( url) {
  const [data, setData] = useState(null);
  const [dataFilter, setDataFilter] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  /* let dataBody = JSON.stringify({
    "sort": {
      "key": "price",
      "type": "ASC"
    }, 
    "categories": [ "pets" ]
  }); */

   let config = {
    method: 'post',
     url: 'https://technical-frontend-api.bokokode.com/api/products', 
    headers: { 
      'Accept': 'application/json', 
      'Content-Type': 'application/json'
    }
  }; 

  let configFilter = {
    method: 'post',
     url: 'https://technical-frontend-api.bokokode.com/api/products', 
    headers: { 
      'Accept': 'application/json', 
      'Content-Type': 'application/json'
    },
    data : {
        "key": "price",
        "type": "ASC",
        "categories": [ "pets" ]
      }
  }; 

  useEffect(() => {

    setLoading(true);

    /* Data */
    axios(config)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });

      /* DataFilter */
      axios(configFilter)
      .then((response) => {
        setDataFilter(response.data);
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

    axios(config)
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

  return { data, dataFilter, loading, error, refetch, getFeaturedProduct };
}

export default useFetch;
