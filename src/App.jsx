import React, {useEffect} from "react";
import {Navigate, RouterProvider, createHashRouter} from "react-router-dom";
import Main from "./components/Main";
import Cities from "./pages/Cities";
import Details from "./pages/Details";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Error404 from "./pages/Error404";
import {useSelector, useDispatch} from "react-redux";
import {logInWithToken} from "./redux/actions/userActions";

const ProtectedRoute = ({ children }) => {
  const isOnline = useSelector((store) => store.userSignUpReducer.isOnline)

  return isOnline ? <Navigate to="/" /> : children
};

const router = createHashRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/cities",
    element: <Cities />,
  },
  {
    path: "/city/:id",
    element: <Details />,
  },
  {
    path: "/signup",
    element: (
      <ProtectedRoute>
        <SignUp />
      </ProtectedRoute>
    ),
  },
  {
    path: "/signin",
    element: (
      <ProtectedRoute>
        <SignIn />
      </ProtectedRoute>
    ),
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logInWithToken());
  }, [dispatch]);

  return <RouterProvider router={router} />;
}

export default App;
