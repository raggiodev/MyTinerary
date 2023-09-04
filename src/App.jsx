import React from 'react';
import {RouterProvider, createHashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
import Main from './components/Main';
import City from './components/City';
import Error404 from './pages/Error404';

const router = createHashRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: 'city/:cityId',
    element: <City />,
  },
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
