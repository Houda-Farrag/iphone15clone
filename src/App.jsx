import React from 'react';

import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import AppLayOut from './Layout';
import Home from './pages/Home/Home.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayOut/>,
        children: [
            {index: true, element: <Home/>},
            {path: '/home', element: <Home/>},
            {path: '*', element: <>not found </>}
        ],
    },


]);

function App() {


    return (
        <RouterProvider router={router}/>
    );
}

export default App;