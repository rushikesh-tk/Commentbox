import React from "react";

const withStyles = (Ele) => {
  return (props) => {
    const cardStyle = {
      backgroundColor: "gray",
    };
    return (
      <div>
        <Ele {...props} cardStyle={cardStyle} />
      </div>
    );
  };
};

export default withStyles;
