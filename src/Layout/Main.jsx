import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../Pages/shares/NavBar/NavBar'
import Footer from '../Pages/shares/Footer/Footer'
import { ToastContainer } from 'react-toastify'

function Main() {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer/>
        </div>
    )
}

export default Main
