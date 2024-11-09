import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ResponsiveAppBar from './Menu';
import ContentHomePage from './ContentHomePage';
import ContentProjectPage from './ContentProjectPage';
import ContentSkillsPage from './ContentSkillsPage';
import ContentContactPage from './ContentContactPage';

import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ContentHomePage className='header-content'/>,
  },
  {
    path: "/project",
    element: <ContentProjectPage className='header-content'/>,
  },
  {
    path: "/skills",
    element: <ContentSkillsPage className='header-content'/>,
  },
  {
    path: "/contact",
    element: <ContentContactPage className='header-content'/>,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


  <React.StrictMode>
    <ResponsiveAppBar/>
    <div className='header'>
      <RouterProvider router={router}/>
      <App className='header-app'/>
    </div>


  </React.StrictMode>
);

reportWebVitals();
