import React, {useEffect} from 'react'
import {Outlet, useLocation, useNavigate} from 'react-router-dom'


const AppLayOut = () => {
 
 

    return (
        <div>
        
            <Outlet />

        </div>
    )
}

export default AppLayOut