import React from "react";
import { useState } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
export const Slider = ({ images }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <div className="slider flex items-center justify-between w-full relative">
      <button onClick={handlePrev} className="absolute z-10">
        <FaChevronCircleLeft className="text-3xl text-yellow-200 border-black rounded-full border-2" />
      </button>
      <div className="my-4 w-full h-96 overflow-hidden flex justify-center border border-neutral-500 rounded-2xl ">
        <img
          src={images[currentIndex]}
          alt="Slider"
          className="object-cover h-full rounded-2xl hover:scale-110 ease-in duration-300"
        />
      </div>

      <button onClick={handleNext} className="absolute z-10 right-0">
        <FaChevronCircleRight className="text-3xl text-yellow-200 border-black rounded-full border-2" />
      </button>
    </div>
  );
};
