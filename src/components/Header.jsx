import {useState} from "react";
import {FaUser} from "react-icons/fa";
import {useSelector, useDispatch} from "react-redux";
import {Link, NavLink, useNavigate} from "react-router-dom";
import Clock from "./Clock";
import logo from "../assets/logo.svg";
import {userLogOut} from "../redux/actions/userActions.js";
import "../../src/index.css";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const user = useSelector((store) => store.userSignUpReducer.user);
  const isOnline = useSelector((store) => store.userSignUpReducer.isOnline);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logIn = async () => {
    setNavOpen(!navOpen);
    await dispatch(userLogOut());
    navigate("/signin");
  };

  return (
    <header className="bg-gradient-to-r from-purple-700 via-pink-500 to-red-600 text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center px-4 md:px-10">
        <div className="flex items-center mb-4 md:mb-0">
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
          <NavLink
            to="/about"
            className="text-lg hover:text-gray-300"
            activeClassName="border-b-2 border-white"
          >
            About
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
            {user && Object.keys(user).length !== 0 ? (
              <button onClick={logIn}>
                <img
                  src={user?.photo}
                  alt={user?.name}
                  className="w-12 h-12 rounded-full"
                />
                Logout
              </button>
            ) : (
              <>
                {isOnline ? (
                  <></>
                ) : (
                  <button onClick={logIn}>
                    <FaUser className="center-svg" />
                    Login
                  </button>
                )}
                <NavLink
                  to="/signup"
                  className="px-4 py-2 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center"
                >
                  Get Started
                </NavLink>
              </>
            )}
          </div>
        </nav>
      </div>
      <div className="flex justify-center">
        <Clock />
      </div>
    </header>
  );
};

export default Header;