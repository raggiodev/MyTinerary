import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="bg-gray-100 py-8 text-center">
      <Link to="/cities" className="text-blue-500 text-lg font-semibold hover:underline">Explore Cities</Link>
        {/* PONER ICON */}
    </section>
  );
}

export default CallToAction;