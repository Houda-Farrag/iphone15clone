import React, {useEffect} from 'react'
import {Outlet, useLocation, useNavigate} from 'react-router-dom'


const AppLayOut = () => {
    const token = localStorage.getItem('token')
//    const {pathname}= useLocation()
//    const navigate = useNavigate()
//    console.log(pathname);
//    if (pathname==='login' && token!=null ) {
//     navigate("/")
//    } 
   return (
        <div>
        
            <Outlet />

        </div>
    )
}

export default AppLayOut