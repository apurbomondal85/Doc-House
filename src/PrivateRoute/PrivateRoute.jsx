
import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../Provider/AuthProvider'

function PrivateRoute({children}) {
    const {user, loader} = useContext(AuthContext);
    const location = useLocation();

    if (loader) {
        return <div>spinner</div>
    }
    
    if (user) {
        return children
    }


  return (<Navigate to="/login" state={{from: location}}></Navigate>)
}

export default PrivateRoute
