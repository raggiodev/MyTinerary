import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { server } from "../utils/axios.js";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { GoogleOAuthProvider } from "@react-oauth/google";
import GoogleLoginButton from "../components/GoogleLoginButton.jsx";
import { useDispatch } from "react-redux";
import { userSignUp } from "../redux/actions/userActions.js";

const SignUp = () => {
  const [data, setData] = useState({
    email: "",
    name: "",
    password: "",
    terms: false,
  });

  const dispatch = useDispatch();

  const handleChangeData = (e) => {
    setData((prevState) => {
      return e.target.name === "terms"
        ? { ...prevState, [e.target.name]: e.target.checked }
        : { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleSubmitData = async (e) => {
    e.preventDefault();
    const userData = { ...data };
    if (userData.terms) {
      delete userData.terms;
      const res = await server.post("/auth/signUp", userData);
      console.log(res.data);
      dispatch(userSignUp(res.data.userData));
    }
  };

  const handleSubmitGoogle = async (data) => {
    const userData = { ...data };
    if (userData.terms) {
      delete userData.terms;
      const res = await server.post("/auth/signUp", userData);
      console.log(res.data);
      dispatch(userSignUp(res.data.userData));
    }
  };

  return (
    <div className="w-full max-w-[800px] px-3 mx-auto flex-1 items-center shrink-0 mt-64">
      <Header />
      <div className="relative z-0 flex flex-col min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
        <div className="p-6 mb-0 text-center bg-white border-b-0 rounded-t-2xl">
          <h5>Register with</h5>
        </div>
        <div className="flex flex-wrap px-3 -mx-3 sm:px-6 xl:px-12">
          <GoogleOAuthProvider clientId="681501462437-s90ta5t35bel24cfdq76g7gnpfbsk0v8.apps.googleusercontent.com">
            {}
            <GoogleLoginButton fn={handleSubmitGoogle} />
          </GoogleOAuthProvider>
          <div className="relative w-full max-w-full px-3 mt-2 text-center shrink-0">
            <p className="z-20 inline px-4 mb-2 font-semibold leading-normal bg-white text-sm text-slate-400">
              or
            </p>
          </div>
        </div>
        <div className="flex-auto p-6">
          <form role="form text-left" onSubmit={handleSubmitData}>
            <div className="mb-4">
              <input
                name="name"
                onChange={handleChangeData}
                value={data.name}
                aria-describedby="email-addon"
                aria-label="Name"
                placeholder="Name"
                className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                type="text"
              />
            </div>
            <div className="mb-4">
              <input
                name="email"
                onChange={handleChangeData}
                value={data.email}
                aria-describedby="email-addon"
                aria-label="Email"
                placeholder="Email"
                className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                type="email"
              />
            </div>
            <div className="mb-4">
              <input
                name="password"
                onChange={handleChangeData}
                value={data.password}
                aria-describedby="password-addon"
                aria-label="Password"
                placeholder="Password"
                className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                type="password"
              />
            </div>
            <div className="min-h-6 pl-7 mb-0.5 block">
              <input
                name="terms"
                onChange={handleChangeData}
                value={data.terms}
                type="checkbox"
                className="w-5 h-5 ease-soft -ml-7 rounded-1.4 checked:bg-gradient-to-tl checked:from-gray-900 checked:to-slate-800 after:duration-250 after:ease-soft-in-out duration-250 relative float-left mt-1 cursor-pointer appearance-none border border-solid border-slate-200 bg-white bg-contain bg-center bg-no-repeat align-top transition-all after:absolute after:flex after:h-full after:w-full after:items-center after:justify-center after:text-white after:opacity-0 after:transition-all checked:border-0 checked:border-transparent checked:bg-transparent checked:after:opacity-100"
                id="terms"
              />
              <label
                htmlFor="terms"
                className="mb-2 ml-1 font-normal cursor-pointer select-none text-sm text-slate-700"
              >
                {" "}
                I agree the{" "}
                <a className="font-bold text-slate-700">Terms and Conditions</a>
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
                className="flex justify-center w-full px-6 py-3 mt-6 mb-2 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-102 hover:shadow-soft-xs leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-gray-900 to-slate-800 hover:border-slate-700 hover:bg-slate-700 hover:text-white"
              >
                Sign up
              </button>
            </div>
            <p className="mt-4 mb-0 leading-normal text-sm">
              Already have an account?{" "}
              <NavLink className="font-bold text-slate-700" to="/signin">
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