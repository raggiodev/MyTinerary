import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {Navigate, RouterProvider, createBrowserRouter} from "react-router-dom";
import Main from "./components/Main";
import Cities from "./pages/Cities";
import About from "./pages/About";
import Details from "./pages/Details";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Error404 from "./pages/Error404";
import {logInWithToken} from "./redux/actions/userActions";

const ProtectedRoute = ({ children }) => {
  const isOnline = useSelector((store) => store.userSignUpReducer.isOnline)

  return isOnline ? <Navigate to="/" /> : children
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/cities",
    element: <Cities />,
  },
  {
    path: "/about",
    element: <About />,
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
