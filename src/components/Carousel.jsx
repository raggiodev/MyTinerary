import React, {useState} from "react";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";
import cities from "../data/cities";
import "../index.css";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previous = () => {
    setCurrentIndex((actualIndex) =>
      actualIndex > 0 ? actualIndex - 1 : cities.length - 1
    );
  };

  const next = () => {
    setCurrentIndex((actualIndex) =>
      actualIndex < cities.length - 1 ? actualIndex + 1 : 0
    );
  };

  const startIndex = currentIndex;
  const visibleCities = [
    cities[startIndex],
    cities[(startIndex + 1) % cities.length],
    cities[(startIndex + 2) % cities.length],
    cities[(startIndex + 3) % cities.length],
  ];

  return (
    <div className="flex flex-col items-center mt-8">
      <h2 className="mb-4 text-lg font-semibold text-center w-[1080px] pl-4">
        Know the Popular Mytineraries
      </h2>
      <div className="relative w-full max-w-4xl">
        <div className="flex items-center justify-center">
          <button
            onClick={previous}
            className="cursor-pointer focus:outline-none p-2 transition-transform transform hover:scale-110"
          >
            <FaArrowLeft />
          </button>
          <div className="flex w-full">
            {visibleCities.map((city) => (
              <div
                key={city.city}
                className="w-1/4 p-1 transform transition-transform duration-300 ease-in-out newItemCarousel"
              >
                <div className="relative h-96">
                  <img
                    src={city.photo}
                    alt={city.city}
                    className="h-full w-full object-cover rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 p-4 bg-opacity-70 bg-gray-800 text-white w-full">
                    <p className="text-lg font-semibold">{city.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={next}
            className="cursor-pointer focus:outline-none p-2 transition-transform transform hover:scale-110"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;