import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h2 className="text-2xl font-semibold">My Tinerary</h2>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:text-gray-300">Home</Link>
            </li>
            <li>
              <Link to="/cities" className="hover:text-gray-300">Cities</Link>
            </li>
            <li>
              <button className="px-4 py-2 rounded-full bg-blue-700 hover:bg-blue-800">Login</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;