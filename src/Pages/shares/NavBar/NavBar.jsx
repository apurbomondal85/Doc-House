
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/images/logo.png'
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import { Button, Navbar } from 'flowbite-react';
import useAdmin from '../../../Hook/useAdmin/useAdmin';

function NavBar() {
  const { user, logOut, token } = useContext(AuthContext)
  const [admin] = useAdmin();

  const handleLogOut = () => {
    logOut();
  }

  return (
    <div className='w-full bg-[#07332F] shadow-md fixed top-0 left-0 z-10'>
      <div className="container  py-2">
        <Navbar fluid rounded className='bg-transparent'>
          <Navbar.Brand>
            <img className='w-40 lg:w-52' src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <div className="font-medium flex items-center flex-col md:flex-row gap-4 lg:gap-8">
              <NavLink to="/" className="text-white">Home</NavLink>
              <NavLink to="/" className="text-white">About</NavLink>
              <NavLink to="/appointment" className="text-white">Appointment</NavLink>
              {
                user && <NavLink to={`/dashboard/${admin === "admin" ? "details-dashboard" : "my-appointment"}`} className="text-white">Dashboard</NavLink>
              }
              <Button className='bg-[#F7A582] enabled:hover:bg-transparent hover:border-[#F7A582]'>
                {
                  user ? <NavLink onClick={handleLogOut} className="text-white">LogOut</NavLink> : <NavLink to="/login" className="text-white">Login</NavLink>
                }
              </Button>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  )
}

export default NavBar
