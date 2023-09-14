import React, { useState } from "react";
import { RouterProvider, createHashRouter } from "react-router-dom";
import Main from "./components/Main";
import Cities from "./pages/Cities";
import Details from "./pages/Details";
// import ProtectedRoute from "./pages/ProtectedRoute";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Error404 from "./pages/Error404";
import { useDispatch } from "react-redux";
import { logInWithToken } from "./redux/actions/userActions";
import { useGoogleOneTapLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import { server } from "./utils/axios";

const router = createHashRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/cities',
    element: <Cities />,
  },
  {
    path: '/city/:id',
    element: <Details />,
  },
  {
    path: '/signup',
    element: <SignUp />
  },
  {
    path: '/signin',
    element: <SignIn />
  },
  {
    path: '*',
    element: <Error404 />
  }
]);

function App() {
  const [count, setCount] = useState(0);

  const dispatch = useDispatch();

  useGoogleOneTapLogin({
    onSuccess: async (credentialResponse) => {
      console.log(credentialResponse);
      const infoUser = jwtDecode(credentialResponse.credential)
      const userData = {
        email: infoUser.email,
        password: "aA_123"
      }
      const res = await server.post('auth/signin', userData)
      console.log(res);
      dispatch(logInWithToken(res.data.userData));
    },
    onError: () => {
      console.log("Login failed");
    },
  });

  // useEffect(() => {
  //   oneTapLogin;
  // }, []);

  return (
    // <div className="bg-gray-100 min-h-screen font-sans">
    <RouterProvider router={router} />
    // </div>
  );
}

export default App;
