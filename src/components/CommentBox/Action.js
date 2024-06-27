import React from "react";

const Action = (props) => {
  const { handleClick, className, type } = props;
  return (
    <button onClick={handleClick} className={className}>
      {type}
    </button>
  );
};

export default Action;
