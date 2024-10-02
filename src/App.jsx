
import React from 'react';
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayOut from './Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Vouchers from './pages/Voucher'
const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayOut />,
        children: [
            { index: true, element: <Home /> },
            { path: '/login', element: <Login /> },
            { path: '/home', element: <Home /> },
            {path:'/vouchers',element:<Vouchers/>},
            { path: '*', element:<>not found </> }
        ],
    },


]);

function App() {


    return (
       
                <RouterProvider router={router} />
    
    );
}

export default App;