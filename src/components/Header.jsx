import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h2>My Tinerary</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cities">Cities</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;