import React, { useState } from "react";

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
      <button onClick={prevImage} className="arrow left">{`<`}</button>
      <div className="image-container">
        <img
          src={pictures[currentIndex]}
          alt={`pictures ${currentIndex + 1}`}
        />
        <div className="counter">{`${currentIndex + 1}/${
          pictures.length
        }`}</div>
      </div>
      <button onClick={nextImage} className="arrow right">
        {">"}
      </button>
    </div>
  );
};

export default Carousel;
