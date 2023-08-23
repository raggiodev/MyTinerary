import React from 'react';
import {RouterProvider, createHashRouter} from 'react-router-dom';
import Main from './components/Main';
import Hero from './components/Hero';
import CallToAction from './components/CallToAction';
import Details from './pages/Details';
import Error404 from './pages/Error404';

const router = createHashRouter([
  { 
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Hero />,
      },
      { 
        path: '/cities',
        element: <CallToAction />
      },
      {
        path: '/cities/:id',
        element: <Details />
      }
    ]
  },
  {
    path: '*',
    element: <Error404 />
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
