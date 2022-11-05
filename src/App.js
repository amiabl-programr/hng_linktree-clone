import React from 'react';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import ErrorPage from './Pages/ErrorPage';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "contact/",
      element: <Contact />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;
