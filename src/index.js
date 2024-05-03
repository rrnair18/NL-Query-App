import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Action from './components/action/Action';
import Homepage from './components/homepage/Homepage';
import Database from './components/database/Database';
import About from './components/about/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage/>,
  },
  {
    path: "/query",
    element: <Action />,
  },
  {
    path: "/database",
    element: <Database/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/homepage",
    element: <Homepage/>,
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

