
import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../Provider/AuthProvider'
import { Spinner } from 'flowbite-react';

function PrivateRoute({ children }) {
    const { user, loader } = useContext(AuthContext);
    const location = useLocation();

    if (loader) {
        return <div className="h-screen w-full flex justify-center items-center"><Spinner aria-label="Default status example" /></div>
    }

    if (user) {
        return children
    }


    return (<Navigate to="/login" state={{ from: location }} replace></Navigate>)
}

export default PrivateRoute
