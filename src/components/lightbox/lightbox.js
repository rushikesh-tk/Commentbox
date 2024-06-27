import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import Slider from "./Slider";
import "./Slider.css";

const images = [
  {
    image_url:
      "https://img.freepik.com/free-photo/young-female-jacket-shorts-presenting-comparing-something-looking-confident-front-view_176474-37521.jpg?w=1800&t=st=1693037944~exp=1693038544~hmac=97e967909706f9b73b4b47d521acf54806f4b9b3efab6196bc8a69f07efff554",
    caption: "Image 1",
  },
  {
    image_url:
      "https://img.freepik.com/free-photo/girl-grey-shirt-showing-something-her-hand_144627-51099.jpg?t=st=1693037931~exp=1693038531~hmac=63713e5a5cf2d23f53ca82b9996ad224ac6e92d0275a53b6debbe6523d7df020",
    caption: "Image 2",
  },
  {
    image_url:
      "https://img.freepik.com/free-photo/young-lady-shirt-jacket-making-scales-gesture-looking-cheerful-front-view_176474-85195.jpg?t=st=1693037931~exp=1693038531~hmac=2f83b6689538e4056912c96f448163e9ef10998f48f671b7e50279f81611fbe6",
    caption: "Image 3",
  },
  {
    image_url:
      "https://img.freepik.com/free-photo/girl-wide-opening-hands-giving-explanation-high-quality-photo_144627-60466.jpg?w=1800&t=st=1693038021~exp=1693038621~hmac=d4520cd86b2aea3e5dda765ede05bb53d70e18a574756d0f41a6806fe325d26d",
    caption: "Image 4",
  },
  {
    image_url:
      "https://img.freepik.com/free-photo/young-lady-shirt-jacket-making-scales-gesture-looking-cheerful-front-view_176474-85195.jpg?t=st=1693037931~exp=1693038531~hmac=2f83b6689538e4056912c96f448163e9ef10998f48f671b7e50279f81611fbe6",
    caption: "Image 5",
  },
  {
    image_url:
      "https://img.freepik.com/free-photo/girl-wide-opening-hands-giving-explanation-high-quality-photo_144627-60466.jpg?w=1800&t=st=1693038021~exp=1693038621~hmac=d4520cd86b2aea3e5dda765ede05bb53d70e18a574756d0f41a6806fe325d26d",
    caption: "Image 6",
  },
];

const ShowImages = (props) => {
  const { active, handleOnImageClick } = props;

  return (
    <div className="images-banner">
      {images.map((item, index) => {
        return (
          <img
            key={item.caption}
            className="imge"
            style={{ borderColor: active === index && "gray" }}
            src={item.image_url}
            alt={item.caption}
            onClick={() => handleOnImageClick(index)}
          />
        );
      })}
    </div>
  );
};

const LightBox = () => {
  const [openModal, setOpenModal] = useState(false);
  const [active, setActive] = useState(0);
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setBeers(data))
      .catch((error) => console.error("Fetching error:", error));
  }, []);

  const onClose = () => {
    setOpenModal(false);
  };

  const handleOnPrevClick = () => {
    if (active === 0) {
      setActive(images.length - 1);
      return;
    }
    setActive(active - 1);
  };

  const handleOnNextClick = () => {
    if (active === images.length - 1) {
      setActive(0);
      return;
    }
    setActive(active + 1);
  };

  const handleOnImageClick = (val) => {
    setActive(val);
    setOpenModal(true);
  };

  return (
    <div>
      <ShowImages active={active} handleOnImageClick={handleOnImageClick} />

      <Modal
        openModal={openModal}
        setOpenModal={setOpenModal}
        onClose={onClose}
        title="Light Box"
      >
        <Slider
          images={images}
          active={active}
          handleOnNextClick={handleOnNextClick}
          handleOnPrevClick={handleOnPrevClick}
        />
      </Modal>
    </div>
  );
};

export default LightBox;
