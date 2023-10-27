
import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './Router/Router.jsx';
import App from './App.jsx'
import {
  
  RouterProvider,
} from "react-router-dom";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="">
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  </div>
)
