import React from 'react';
import cities from '../data/cities';
import { Link } from 'react-router-dom';

const Carousel = () => {
  return (
    <section>
      <h2>Popular Mytineraries</h2>
      <div>
        {cities.map(cities => (
          <Link to={`/city/${cities.country}`} key={cities.country}>
            <div>
              <img src={cities.photo} alt={`City: ${cities.country}`} />
              <p>{cities.country}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Carousel;