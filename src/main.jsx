import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Donation from './components/Donation/Donation';
import DonationDetails from './components/DonationDetails/DonationDetails';
import Statistics from './components/Statistics/Statistics';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: "/",
        element: <Home></Home>
        
      },
      {
        path: "/details/:id",
        element: <DonationDetails></DonationDetails>,
        loader: ()=>fetch('../info.json')
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
        loader: ()=>fetch('../info.json')
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>,
        loader: ()=>fetch('../info.json')
      }
    ]

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
