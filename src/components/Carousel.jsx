import React, {useState} from 'react';
import rightArrow from '../assets/rigthArrow.svg';
import Icon from './Icon';
import cities from '../data/cities';

const Carousel = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const previous = () => {
    setSelectedIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : cities.length - 1));
  };

  const next = () => {
    setSelectedIndex(prevIndex => (prevIndex < cities.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <h2 className="mb-4 text-lg font-semibold text-left w-full pl-12">Popular Mytineraries</h2>
      <div className="relative w-full max-w-4xl">
        <div className="flex items-center justify-center">
          <Icon fn={previous} icon={rightArrow} style={{ cursor: 'pointer' }} />
          <div className="overflow-hidden h-96 w-3/4 relative">
            {cities.map((city, index) => (
              <div
                key={city.city}
                className={`h-full w-full absolute top-0 transition-transform duration-300 ease-in-out ${
                  index === selectedIndex ? '' : 'transform translate-x-full'
                }`}
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
          <Icon fn={next} icon={rightArrow} style={{ cursor: 'pointer' }} />
        </div>
      </div>
    </div>
  );
};

export default Carousel;