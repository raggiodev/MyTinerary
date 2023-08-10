import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:text-gray-300">WPP ICON</Link>
            </li>
            <li>
              <Link to="/cities" className="hover:text-gray-300">MAIL ICON</Link>
            </li>
          </ul>
        </nav>
        <h3 className="text-lg">MyTinerary - 2023</h3>
      </div>
    </footer>
  );
}
export default Footer;