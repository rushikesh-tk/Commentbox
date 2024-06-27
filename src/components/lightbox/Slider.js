import React from "react";
import "./Slider.css";

const Slider = (props) => {
  const { images, active, handleOnNextClick, handleOnPrevClick } = props;
  return (
    <div className="slider-wrapper">
      <button className="btn" onClick={handleOnPrevClick}>
        &lt;
      </button>
      <img
        className="image-space"
        src={images[active].image_url}
        alt={images[active].caption}
      />
      <button className="btn" onClick={handleOnNextClick}>
        &gt;
      </button>
    </div>
  );
};

export default Slider;
