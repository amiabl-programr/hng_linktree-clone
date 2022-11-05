import React from 'react';
import Home from './Pages/Home';
import Contact from './Pages/Contact';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
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
