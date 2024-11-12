import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ResponsiveAppBar from './Menu.js';
import ContentHomePage from './ContentHomePage.js';
import ContentProjectPage from './ContentProjectPage.js';
import ContentSkillsPage from './ContentSkillsPage.js';
import ContentContactPage from './ContentContactPage.js';
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
