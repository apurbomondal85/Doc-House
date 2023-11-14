
import React from 'react'
import NavBar from '../Pages/shares/NavBar/NavBar'
import UserSideBar from '../Pages/Dashboard/UserDashboard/UserSideBar/UserSideBar'
import AdminDashboard from '../Pages/Dashboard/AdminDashboard/AdminDashboard/AdminDashboard'
import useAdmin from '../Hook/useAdmin/useAdmin'

function Dashboard() {
  const [admin] = useAdmin();

  return (
    <div className='bg-[#F1F5F9]'>
      <NavBar />
      <div className="py-[2.2rem] lg:py-[2.9rem] bg-black"></div>
      {
        admin === "admin" ? <AdminDashboard /> : <UserSideBar />
      }
    </div>
  )
}

export default Dashboard
