import React from 'react';
import {RouterProvider, createHashRouter} from 'react-router-dom';
import Main from './components/Main';
import Error404 from './components/Error404';

const router = createHashRouter([
  { 
    path: '/',
    element: <Main />,
    /* children: [
      {
        path: '/',
        element: <Hero />,
      },
      { 
        path: '/cities',
        element: <Cities />
      },
      {
        path: '/cities/:id',
        element: <Details />
      }
    ] */
  },
  {
    path: '*',
    element: <Error404 />
  }
]);

function App() {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
