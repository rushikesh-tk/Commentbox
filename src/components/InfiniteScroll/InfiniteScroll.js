import React, { useEffect, useState } from "react";
import "./InfiniteScroll.css";

const RenderData = (props) => {
  const { data } = props;

  return (
    <div>
      {data.map((item, index) => {
        return (
          <div key={index} style={{ marginBottom: "1.5vh", cursor: "pointer" }}>
            {item.title}
          </div>
        );
      })}
    </div>
  );
};

const InfiniteScroll = () => {
  const [count, setCount] = useState(40);
  const [data, setData] = useState([]);
  const [pageSize, setPageSize] = useState(50);
  const [currPage, setCurrPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");

  const BASE_URL = "https://api.potterdb.com/v1/characters";

  const requestOptions = {
    method: "GET",
  };

  const fetchData = async () => {
    setLoading(true);

    try {
      const resp = await fetch(
        // BASE_URL + `/?page[size]=${pageSize}?page[number]=${currPage}`,
        "https://jsonplaceholder.typicode.com/photos",
        requestOptions
      );
      const tempData = await resp.json();
      setData(tempData);
    } catch (error) {
      console.log("Error found", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        window.document.body.offsetHeight
      ) {
        // setCount((prev) => prev + 20);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [count]);

  const handleOnChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  const filterData = (val) => {
    let tempData = [];
    tempData = data.filter((item) => {
      if (item.title.includes(val)) {
        return item;
      }
    });
    setData(tempData);
  };

  useEffect(() => {
    filterData(input);
  }, [input]);

  return (
    <div className="data-space-parent">
      <div className="input-space">
        <input
          placeholder="Enter Character"
          onChange={handleOnChange}
          value={input}
        />
      </div>

      <div className="data-space">
        {loading ? (
          <div>Loading...</div>
        ) : data.length > 0 ? (
          <RenderData data={data} />
        ) : (
          <div>Error</div>
        )}
      </div>
    </div>
  );
};

export default InfiniteScroll;
