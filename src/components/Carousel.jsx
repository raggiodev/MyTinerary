import React from 'react';
import cities from '../data/cities';
import { Link } from 'react-router-dom';

const Carousel = () => {
  return (
    <section className="bg-white py-8">
      <h2 className="text-2xl font-semibold mb-6">Popular Mytineraries</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cities.map(city => (
          <Link to={`/city/${city.country}`} key={city.country}>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg">
              <img src={city.photo} alt={`City: ${city.country}`} className="w-full h-40 object-cover mb-2 rounded-lg" />
              <p className="text-lg font-semibold">{city.country}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
export default Carousel;