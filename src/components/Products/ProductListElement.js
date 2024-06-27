import React from "react";

const ProductListElement = (props) => {
  const { data, listname, cardStyle } = props;

  return (
    <div style={{ margin: 10, ...cardStyle }}>
      <div style={{ backgroundColor: "gray", marginBottom: 10 }}>
        {listname}
      </div>
      <>
        {data.map((item) => {
          return (
            <div
              key={item.id}
              style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: 7,
                backgroundColor: "pink",
              }}
            >
              Item : {item.title}
            </div>
          );
        })}
      </>
    </div>
  );
};

export default ProductListElement;
