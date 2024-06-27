import React, { useEffect, useState } from "react";

const WithFetchAPI = (Element, url) => {
  const WithFetch = (props) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);

    const fetchData = async (url) => {
      setLoading(true);
      try {
        const resp = await fetch(url);
        const data = await resp.json();
        setData(data);
      } catch (error) {
        console.log("Error=>", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    useEffect(() => {
      fetchData(url);
    }, []);

    return (
      <>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error while fetch data</div>
        ) : (
          <div>
            <Element data={data} {...props} />
          </div>
        )}
      </>
    );
  };

  return WithFetch;
};

export default WithFetchAPI;
