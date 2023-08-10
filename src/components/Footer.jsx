import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
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
      <h3>MyTinerary - 2023</h3>
    </footer>
  );
}

export default Footer;