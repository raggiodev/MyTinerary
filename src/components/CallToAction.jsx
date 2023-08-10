import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center">
        <p className="text-2xl font-semibold">Start your journey</p>
        <Link to="/cities">
          <button className="bg-blue-500 text-white py-2 px-6 mt-4 rounded hover:bg-blue-600 hover:shadow-md transition duration-300 ease-in-out">
            Explore Cities
          </button>
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;