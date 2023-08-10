import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section>
      <Link to="/cities">
        {/* PONER ICON */}
        <p>Explore Cities</p>
      </Link>
    </section>
  );
}

export default CallToAction;