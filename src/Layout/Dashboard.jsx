
import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../Pages/shares/NavBar/NavBar'
import UserSideBar from '../Pages/Dashboard/UserDashboard/UserSideBar/UserSideBar'

function Dashboard() {
  return (
    <div className='bg-[#F1F5F9]'>
      <NavBar />
      <div className="py-[3.2rem] bg-black"></div>
      <UserSideBar />
    </div>
  )
}

export default Dashboard
