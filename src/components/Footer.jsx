import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto">
        <nav className="flex justify-center mb-4">
          <Link to="/" className="mr-4 hover:underline">Home</Link>
          <Link to="/cities" className="hover:underline">Cities</Link>
        </nav>
        <div className="flex justify-center space-x-4">
          <a href="#"                       className="hover:text-gray-400 fab fa-whatsapp text-xl">wpp logo</a>
          <a href="https://twitter.com/JoeTheorium" className="hover:text-gray-400 fab fa-whatsapp text-xl">x logo</a>
          <a href="mailto:fernandoandresraggio@gmail.com" className="hover:text-gray-400 fab fa-whatsapp text-xl">gmail logo</a>
        </div>
        <p className="text-center mt-4">&copy; 2023 MyTinerary. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;