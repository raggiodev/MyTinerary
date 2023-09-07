import React from 'react';
import {RouterProvider, createHashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
import Main from './components/Main';
import Cities from './pages/Cities';
import Details from './pages/Details';
// import SignUp from './pages/SignUp';
// import SignIn from './pages/SignIn';
import Error404 from './pages/Error404';

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
  // {
  //   path: '/signup',
  //   element: <SignUp />
  // },
  // {
  //   path: '/signin',
  //   element: <SignIn />
  // },
  {
    path: '*',
    element: <Error404 />
  }
]);

function App() {
  return (
    <Provider store={store}>
      <div className="bg-gray-100 min-h-screen font-sans">
        <RouterProvider router={router} />
      </div>
    </Provider>
  );
}

export default App;
