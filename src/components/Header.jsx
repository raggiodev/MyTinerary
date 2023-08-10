import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import iconUser from '../assets/user.svg';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-10">
        <Link to="/" className="flex items-center text-xl font-semibold">
          <img src={logo} alt="MyTinerary Logo" className="w-8 h-8 mr-2" />
          MyTinerary
        </Link>
        <nav className="flex items-center space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/cities" className="hover:underline">Cities</Link>
          <button className="px-4 py-2 rounded-full bg-blue-700 hover:bg-blue-800 flex items-center">
            <img src={iconUser} alt="User Icon" className="w-6 h-6 mr-2" />Login
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;