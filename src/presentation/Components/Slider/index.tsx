import { useState } from "react";
import "./styles.css";
import Card from "../CardProjects";

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="slider">
      <button className="slider-button prev" onClick={prevSlide}>
        Previous
      </button>
      <Card image={images[currentIndex]} />
      <button className="slider-button next" onClick={nextSlide}>
        Next
      </button>
    </div>
  );
};

export default Slider;
