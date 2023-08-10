import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 fixed bottom-0 left-0 w-full">
      <div className="container mx-auto">
        <nav className="flex justify-center mb-4">
          <Link to="/" className="mr-4 hover:underline">Home</Link>
          <Link to="/cities" className="hover:underline">Cities</Link>
        </nav>
        <div className="flex justify-center">
          <a href="#" className="mr-4 hover:text-gray-400"><i className="fab fa-whatsapp"></i></a>
          <a href="#" className="mr-4 hover:text-gray-400"><i className="fab fa-twitter"></i></a>
          <a href="#" className="hover:text-gray-400"><i className="fab fa-instagram"></i></a>
        </div>
        <p className="text-center mt-4">&copy; 2023 MyTinerary. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;