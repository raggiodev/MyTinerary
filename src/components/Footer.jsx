import {NavLink} from 'react-router-dom';
import {FaWhatsapp, FaTwitter, FaEnvelope} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto">
        <nav className="flex justify-center mb-4">
          <NavLink to="/" className="mr-4 hover:underline">Home</NavLink>
          <NavLink to="/cities" className="hover:underline">Cities</NavLink>
        </nav>
        <div className="flex justify-center space-x-4">
          <a href="#" className="hover:text-gray-400 text-xl">
            <FaWhatsapp /> {/* WhatsApp icon */}
          </a>
          <a href="https://twitter.com/JoeTheorium" className="hover:text-gray-400 text-xl">
            <FaTwitter /> {/* Twitter/X icon */}
          </a>
          <a href="mailto:fernandoandresraggio@gmail.com" className="hover:text-gray-400 text-xl">
            <FaEnvelope /> {/* Gmail icon */}
          </a>
        </div>
        <p className="text-center mt-4">&copy; 2023 MyTinerary - <a href="https://www.github.com/JoeTheorium">JoeTheorium</a> - All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;