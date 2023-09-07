import React, {useState} from "react";
import {Link, NavLink} from "react-router-dom";
import logo from "../assets/logo.svg";
import iconUser from "../assets/user.svg";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-purple-700 via-pink-500 to-red-600 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-10">
        <div className="flex items-center">
          <Link to="/" className="flex items-center text-2xl font-semibold">
            <img src={logo} alt="MyTinerary Logo" className="w-8 h-8 mr-2" />
            MyTinerary
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <NavLink
            to="/"
            exact
            className="text-lg hover:text-gray-300"
            activeClassName="border-b-2 border-white"
          >
            Home
          </NavLink>
          <NavLink
            to="/cities"
            className="text-lg hover:text-gray-300"
            activeClassName="border-b-2 border-white"
          >
            Cities
          </NavLink>
        </div>
        <nav className="md:hidden flex items-center">
          <button
            onClick={() => setNavOpen(!navOpen)}
            className={`text-white hover:text-gray-300 focus:outline-none transition-transform ${
              navOpen ? "transform rotate-90" : "transform rotate-0"
            }`}
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
        <nav
          className={`md:flex items-center space-x-4 ${
            navOpen ? "block" : "hidden"
          }`}
        >
          <div className="md:flex space-x-4">
            <NavLink
              to="/signin"
              className="px-4 py-2 rounded-full bg-blue-700 hover:bg-blue-800 flex items-center text-white"
            >
              <img src={iconUser} alt="User Icon" className="w-6 h-6 mr-2" />
              Login
            </NavLink>
            <NavLink
              to="/signup"
              className="px-4 py-2 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center"
            >
              Get Started
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;