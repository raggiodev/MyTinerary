import React, {useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GoogleLoginButton from "../components/GoogleLoginButton.jsx";
import axios from "axios";
import {useGoogleLogin} from "@react-oauth/google";
import {useDispatch} from "react-redux";
import {userSignUp} from "../redux/actions/userActions.js";
import {unwrapResult} from "@reduxjs/toolkit";
import {FaEyeSlash, FaEye} from "react-icons/fa6";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    photo: "",
    terms: false,
  });

  const handleChangeUserData = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const actionResult = await dispatch(userSignUp({ ...userData }));
    const result = await unwrapResult(actionResult);
    if (result.token) {
      navigate("/cities");
    }
  };

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const infoUser = await axios.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        {
          headers: {
            Authorization: "Bearer " + tokenResponse.access_token,
          },
        }
      );
      const data = {
        name: infoUser.data.name,
        email: infoUser.data.email,
        password: "aA_123", // NO es seguro almacenar una contraseña fija acá
        photo: infoUser.data.picture,
      };
      const actionResult = await dispatch(userSignUp(data));
      const result = await unwrapResult(actionResult);
      if (result.token) {
        navigate("/cities");
      }
    },
  });

  const handleChangeData = (e) => {
    setUserData((prevState) => {
      return e.target.name === "terms"
        ? { ...prevState, [e.target.name]: e.target.checked }
        : { ...prevState, [e.target.name]: e.target.value };
    });
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto mt-64">
      <Header />
      <div className="bg-white shadow-xl rounded-2xl">
        <div className="p-6 mb-0 text-center bg-white rounded-t-2xl">
          <h5 className="text-lg font-semibold">Register with</h5>
        </div>
        <div className="flex flex-wrap px-4 py-2">
          <button
            onClick={() => login()}
            className="w-full py-2 text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
            type="button"
          >
            <GoogleLoginButton />
          </button>
          <div className="w-full py-2 text-center">
            <p className="text-sm text-gray-500">or</p>
          </div>
        </div>
        <div className="p-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                name="name"
                onChange={(e) => handleChangeUserData(e)}
                value={userData.name}
                aria-describedby="email-addon"
                aria-label="Name"
                placeholder="Name"
                className="w-full px-4 py-2 text-gray-700 bg-white border rounded-lg shadow-sm focus:ring focus:ring-blue-300 focus:outline-none"
                type="text"
              />
            </div>
            <div className="mb-4">
              <input
                name="email"
                onChange={(e) => handleChangeUserData(e)}
                value={userData.email}
                aria-describedby="email-addon"
                aria-label="Email"
                placeholder="Email"
                className="w-full px-4 py-2 text-gray-700 bg-white border rounded-lg shadow-sm focus:ring focus:ring-blue-300 focus:outline-none"
                type="email"
              />
            </div>
            <div className="mb-4 relative">
              <input
                name="password"
                onChange={(e) => handleChangeUserData(e)}
                value={userData.password}
                aria-describedby="password-addon"
                aria-label="Password"
                placeholder="Password"
                className="w-full px-4 py-2 text-gray-700 bg-white border rounded-lg shadow-sm focus:ring focus:ring-blue-300 focus:outline-none"
                type={showPassword ? "text" : "password"}
                autoComplete="on"
              />
              {showPassword ? (
                <FaEyeSlash
                  className="absolute top-3 right-3 cursor-pointer text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                />
              ) : (
                <FaEye
                  className="absolute top-3 right-3 cursor-pointer text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                />
              )}
            </div>
            <div className="mb-4 relative">
              <input
                name="repeatPassword"
                onChange={(e) => handleChangeUserData(e)}
                value={userData.repeatPassword}
                aria-describedby="repeatPassword-addon"
                aria-label="Repeat password"
                placeholder="Repeat password"
                className="w-full px-4 py-2 text-gray-700 bg-white border rounded-lg shadow-sm focus:ring focus:ring-blue-300 focus:outline-none"
                type={showPassword ? "text" : "password"}
                autoComplete="off"
              />
              {showPassword ? (
                <FaEyeSlash
                  className="absolute top-3 right-3 cursor-pointer text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                />
              ) : (
                <FaEye
                  className="absolute top-3 right-3 cursor-pointer text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                />
              )}
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="photo"
                placeholder=" "
                value={userData.photo}
                onChange={(e) => handleChangeUserData(e)}
                className="w-full px-4 py-2 text-gray-700 bg-white border rounded-lg shadow-sm focus:ring focus:ring-blue-300 focus:outline-none"
              />
              <label htmlFor="photo" className="text-sm text-gray-500">
                Insert your profile photo URL here!
              </label>
            </div>
            <div className="mb-4">
              <input
                name="terms"
                onChange={handleChangeData}
                value={userData.terms}
                type="checkbox"
                className="w-5 h-5 ease-soft -ml-7 rounded-1.4 checked:bg-gradient-to-tl checked:from-gray-900 checked:to-slate-800 after:duration-250 after:ease-soft-in-out duration-250 relative float-left mt-1 cursor-pointer appearance-none border border-solid border-slate-200 bg-white bg-contain bg-center bg-no-repeat align-top transition-all after:absolute after:flex after:h-full after:w-full after:items-center after:justify-center after:text-white after:opacity-0 after:transition-all checked:border-0 checked:border-transparent checked:bg-transparent checked:after:opacity-100"
                id="terms"
              />
              <label
                htmlFor="terms"
                className="mb-2 ml-1 font-normal cursor-pointer select-none text-sm text-gray-700"
              >
                I agree to the{" "}
                <NavLink className="font-bold text-blue-600" to="/terms">
                  Terms and Conditions
                </NavLink>
                <svg
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 inline ml-1 fill-current text-green-500"
                >
                  <path d="M6.293 9.293a1 1 0 0 1 1.414 0L10 10.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"></path>
                </svg>
              </label>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="w-full px-6 py-3 mt-6 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
              >
                Sign up
              </button>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Already have an account?{" "}
              <NavLink className="font-bold text-blue-600" to="/signin">
                Sign in
              </NavLink>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;