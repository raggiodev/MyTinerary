import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="bg-white py-12">
      <div className='text-center'>
        <p>Start your journey</p>
        <Link to="/cities">
          <button className="bg-blue-500 text-white py-2 px-4 mt-4 rounded hover:bg-blue-600">Explore Cities</button>
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;