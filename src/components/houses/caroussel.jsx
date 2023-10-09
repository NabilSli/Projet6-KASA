import React, { useState } from "react";

import arrowRight from "../../assets/images/arrowRight.svg";
import arrowLeft from "../../assets/images/arrowLeft.svg";

const Carousel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <div className="image-container">
        {""}
        <button onClick={prevImage} className="arrowLeft">
          <img
            src={arrowLeft}
            alt="previous button"
            className="arrowLeft"
          ></img>
        </button>
        <img
          className="carousselPictures"
          src={pictures[currentIndex]}
          alt={`pictures ${currentIndex + 1}`}
        />
        <button onClick={nextImage} className="arrowRight">
          <img src={arrowRight} alt="next button" className="arrowRight"></img>
        </button>
        <div className="counter">{`${currentIndex + 1}/${
          pictures.length
        }`}</div>
      </div>
    </div>
  );
};

export default Carousel;
