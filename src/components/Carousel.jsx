import React, {useState} from "react";
import rightArrow from "../assets/rightArrow.svg";
import leftArrow from "../assets/leftArrow.svg";
import cities from "../data/cities";

const Carousel = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const previous = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : cities.length - 1
    );
  };

  const next = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex < cities.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <h2 className="mb-4 text-lg font-semibold text-center w-[1080px] pl-4">
        Popular Mytineraries
      </h2>
      <div className="relative w-full max-w-4xl">
        <div className="flex items-center justify-center">
          <button
            onClick={previous}
            className="cursor-pointer focus:outline-none p-2 transition-transform transform hover:scale-110"
          >
            <img src={leftArrow} alt="Previous" />
          </button>
          <div className="overflow-hidden h-96 w-full relative">
            {cities.map((city, index) => (
              <div
                key={city.city}
                className={`h-full w-full absolute top-0 transition-transform duration-300 ease-in-out ${index === selectedIndex ? "" : "transform translate-x-full"}`}
              >
                <img
                  src={city.photo}
                  alt={city.city}
                  className="h-full w-full object-cover rounded-lg"
                />
                <div className="absolute bottom-0 left-0 p-4 bg-opacity-70 bg-gray-800 text-white w-full">
                  <p className="text-lg font-semibold">{city.city}</p>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={next}
            className="cursor-pointer focus:outline-none p-2 transition-transform transform hover:scale-110"
          >
            <img src={rightArrow} alt="Next" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;