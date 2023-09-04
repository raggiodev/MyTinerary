import React, {useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import logo from '../assets/logo.svg';
import iconUser from '../assets/user.svg';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-10">
        <Link to="/" className="flex items-center text-xl font-semibold">
          <img src={logo} alt="MyTinerary Logo" className="w-8 h-8 mr-2" />
          MyTinerary
        </Link>
        <nav className="md:hidden flex items-center">
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="text-white hover:text-gray-300 focus:outline-none"
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </nav>
        <nav className={`md:flex items-center space-x-4 ${navOpen ? 'block' : 'hidden'}`}>
          <NavLink
            to="/"
            className="hover:underline"
            activeClassName="border-b-2 border-white"
          >
            Home
          </NavLink>
          <NavLink
            to="/cities"
            className="hover:underline"
            activeClassName="border-b-2 border-white"
          >
            Cities
          </NavLink>
          <button className="px-4 py-2 rounded-full bg-blue-700 hover:bg-blue-800 flex items-center">
            <img src={iconUser} alt="User Icon" className="w-6 h-6 mr-2" />
            Login
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;