import React, {useEffect} from "react";
import {RouterProvider, createHashRouter} from "react-router-dom";
import Main from "./components/Main";
import Cities from "./pages/Cities";
import Details from "./pages/Details";
import ProtectedRoute from "./pages/ProtectedRoute";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Error404 from "./pages/Error404";
import {useDispatch} from "react-redux";
import {logInWithToken} from "./redux/actions/userActions";

// const router = createHashRouter([
//   {
//     path: "/",
//     element: <ProtectedRoute />,
//     children: [
//       {
//         path: "/",
//         element: <Main />,
//         children: [
//           {
//             path: "/cities",
//             element: <Cities />,
//           },
//           {
//             path: "/cities/:id",
//             element: <Details />,
//           },
//         ],
//       },
//     ],
//   },
//   {
//     path: "/signup",
//     element: <SignUp />,
//   },
//   {
//     path: "/signin",
//     element: <SignIn />,
//   },
//   {
//     path: "*",
//     element: <Error404 />,
//   },
// ]);

// SI NO FUNCIONA ProtectedRoute (Por qué? Necesito orientación ahí). COMENTAR LAS RUTAS ANTERIORES Y USAR ESTAS:

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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logInWithToken());
  }, [dispatch]);

  return <RouterProvider router={router} />;
}

export default App;
