import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../Pages/shares/NavBar/NavBar'
import Footer from '../Pages/shares/Footer/Footer'

function Main() {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}

export default Main
