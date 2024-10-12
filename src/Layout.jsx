import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from "./components/Header/Header.jsx";

const AppLayOut = () => {
    return <>
        <main className='bg-black'>
           <Header/> 
            <Outlet/>
       </main>


   </>
}

export default AppLayOut