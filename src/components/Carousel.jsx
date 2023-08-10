import React, { useState } from 'react';
import leftArrow from '../assets/leftArrow.svg';
import rightArrow from '../assets/rigthArrow.svg';
import Icon from './Icon';
import cities from '../data/cities';

const Carousel = () => {
  const slides = Array.from({ length: 3 }, (_, index) => {
    const citiesInSlide = cities.slice(index * 4, (index + 1) * 4);

    return (
      <div key={index} className="flex">
        {citiesInSlide.map(city => (
          <div key={city.city} className="w-1/4 p-4">
            <img src={city.photo} alt={city.city} className="w-full h-auto" />
            <p className="mt-2">{city.city}</p>
          </div>
        ))}
      </div>
    );
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const previous = () => {
    setSelectedIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : 2));
  };

  const next = () => {
    setSelectedIndex(prevIndex => (prevIndex < 2 ? prevIndex + 1 : 0));
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <h2 className="mb-4 text-lg font-semibold">Popular Mytineraries</h2>
      <div className="flex items-center">
        <Icon fn={previous} icon={leftArrow} />
        <div className="overflow-hidden w-3/4">{slides[selectedIndex]}</div>
        <Icon fn={next} icon={rightArrow} />
      </div>
    </div>
  );
};

export default Carousel;