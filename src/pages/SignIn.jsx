import React, {useState, useRef} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GoogleLoginButton from "../components/GoogleLoginButton.jsx";
import axios from "axios";
import {useGoogleLogin} from "@react-oauth/google";
import {useDispatch } from "react-redux";
import {userSignIn} from "../redux/actions/userActions.js";
import {unwrapResult} from "@reduxjs/toolkit";
import {FaEyeSlash, FaEye} from "react-icons/fa6";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const email = useRef();
  const password = useRef();

  const loginWithGoogle = useGoogleLogin({
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
      const actionResult = await dispatch(userSignIn(data));
      const result = await unwrapResult(actionResult);
      if (result.token) {
        navigate("/cities");
      }
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const actionResult = await dispatch(
      userSignIn({
        email: email.current.value,
        password: password.current.value,
      })
    );
    const result = await unwrapResult(actionResult);
    if (result.token) {
      navigate("/cities");
    }
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto mt-64">
      <Header />
      <div className="bg-white shadow-xl rounded-2xl">
        <div className="p-6 mb-0 text-center bg-white rounded-t-2xl">
          <h5 className="text-lg font-semibold">Login with</h5>
        </div>
        <div className="flex flex-wrap px-4 py-2">
          <button
            onClick={() => loginWithGoogle()}
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
                name="email"
                ref={email}
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
                ref={password}
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
            <div className="text-center">
              <button
                onClick={handleSubmit}
                className="w-full px-6 py-3 mt-6 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
                type="submit"
              >
                Sign in
              </button>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Don´t have an account?{" "}
              <NavLink className="font-semibold text-blue-600" to="/signup">
                Sign up
              </NavLink>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;