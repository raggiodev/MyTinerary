import React, { useState } from 'react';
import PropTypes from 'prop-types';
import leftArrow from '../../public/leftArrow.svg';
import rightArrow from '../../public/rightArrow.svg';

const Carousel = ({ children }) => {
  const elementsArray = React.Children.toArray(children);
  const [startIndex, setStartIndex] = useState(0);

  const visibleElements = elementsArray.slice(startIndex, startIndex + 3);

  const previous = () => {
    const newStartIndex = (startIndex - 1 + elementsArray.length) % elementsArray.length;
    setStartIndex(newStartIndex);
  };

  const next = () => {
    const newStartIndex = (startIndex + 1) % elementsArray.length;
    setStartIndex(newStartIndex);
  };

  return (
    <div className="flex items-center justify-center mt-8">
      <button onClick={previous} className="text-gray-500 hover:text-gray-700 cursor-pointer">
        <img src={leftArrow} alt="Left Arrow" className="w-6 h-6" />
      </button>
      <div className="mx-4">
        {visibleElements.map((element, index) => (
          <div key={index}>{element}</div>
        ))}
      </div>
      <button onClick={next} className="text-gray-500 hover:text-gray-700 cursor-pointer">
        <img src={rightArrow} alt="Right Arrow" className="w-6 h-6" />
      </button>
    </div>
  );
};

Carousel.propTypes = {
  children: PropTypes.node.isRequired
};

export default Carousel;