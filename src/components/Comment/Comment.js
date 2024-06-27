import React, { useEffect, useState } from "react";
import "./Comment.css";

const RenderList = ({ list }) => {
  return (
    <>
      {list.map((item) => {
        return (
          <div
            key={item.id}
            style={{
              backgroundColor: "pink",
              marginBottom: 10,
              borderRadius: 5,
              padding: 10,
            }}
          >
            {item.title}
          </div>
        );
      })}
    </>
  );
};

const Pagination = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const resp = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${
          page * limit - limit
        }`
      );
      const data = await resp.json();
      const noOfPages = Math.ceil(data.total / limit);
      setTotalPages(noOfPages);
      setData(data.products);
    } catch (error) {
      console.log("error=>", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page, limit]);

  const handleNext = () => {
    setPage((prev) => prev + 1);
  };
  const handlePrev = () => {
    setPage((prev) => prev - 1);
  };

  const handlePageChange = (currPage) => {
    setPage(currPage);
  };

  return (
    <div style={{ minWidth: "50%" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          padding: 10,
        }}
      >
        <div
          style={{
            backgroundColor: "skyblue",
            marginBottom: 15,
            marginTop: 10,
            padding: 10,
            borderRadius: 5,
            display: "flex",
            justifyContent: "space-between",
            width: "80%",
          }}
        >
          <button
            style={{ cursor: "pointer" }}
            onClick={handlePrev}
            disabled={page === 1 ? true : false}
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <div
              key={index + 1}
              style={{
                marginRight: 5,
                display: "flex",
                flexDirection: "row",
                backgroundColor: page === index + 1 ? "gray" : "pink",
                width: "100%",
                marginLeft: 5,
                padding: 3,
                cursor: "pointer",
                borderRadius: 5,
                justifyContent: "center",
              }}
              onClick={(e) => handlePageChange(index + 1)}
            >
              {index + 1}
            </div>
          ))}

          <button
            onClick={handleNext}
            style={{ cursor: "pointer" }}
            disabled={page >= totalPages ? true : false}
          >
            Next
          </button>
        </div>
        <div style={{ width: "20%", marginLeft: 10 }}>
          <label>Page Size :</label>
          <select
            onChange={(e) => {
              setLimit(e.target.value);
              setPage(1);
            }}
          >
            <option>10</option>
            <option>20</option>
            <option>30</option>
            <option>40</option>
            <option>50</option>
            <option>100</option>
          </select>
        </div>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>{data && data.length > 0 && <RenderList list={data} />}</div>
      )}
    </div>
  );
};

export default Pagination;
