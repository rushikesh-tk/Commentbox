import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [count, setCount] = useState(0);
  const [triggerCnt, setTriggerCnt] = useState(0);

  const myDebounce = (callbackFunc, delay) => {
    let timer;

    return (...args) => {
      if (timer) {
        clearTimeout(timer);
      }

      timer = setTimeout(() => {
        callbackFunc(...args);
      }, delay);
    };
  };

  const IncrementTrigger = () => {
    setTriggerCnt((prev) => prev + 1);
  };

  const IncrementCnt = () => {
    setCount((prev) => prev + 1);
    myDebounce(IncrementTrigger, 2000)();
  };

  return (
    <>
      <div>Count = {count}</div>
      <div>TriggerCnt = {triggerCnt}</div>
      <div className="home">
        <Link to="lightbox">
          <button className="btn">LightBox</button>
        </Link>

        <Link to="scroll">
          <button className="btn">Infinite Scroll</button>
        </Link>

        <Link to="products">
          <button className="btn">All Products</button>
        </Link>

        <Link to="comments">
          <button className="btn">Pagination</button>
        </Link>

        <Link to="section">
          <button className="btn">Comment Box</button>
        </Link>

        <button style={{ cursor: "pointer" }} onClick={IncrementCnt}>
          Increment
        </button>
      </div>
    </>
  );
};

export default Home;
