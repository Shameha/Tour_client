import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  
  RouterProvider,
} from "react-router-dom";
import router from './Router/Router.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
      <HelmetProvider>
      <RouterProvider router={router} />
      </HelmetProvider>
      </AuthProvider>
  </React.StrictMode>,
)
