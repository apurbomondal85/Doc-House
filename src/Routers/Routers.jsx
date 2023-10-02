import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import DoctorProfile from "../Pages/DoctorProfile/DoctorProfile";
import SingUp from "../Pages/SingUp/SingUp";
import Login from "../Pages/Login/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Error from "../Pages/Error/Error";
import Appointment from "../Pages/Appointment/Appointment";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error></Error> ,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/doctor-profile/:id",
                element: <PrivateRoute><DoctorProfile></DoctorProfile></PrivateRoute>,
            },
            {
                path: "/appointment",
                element: <Appointment></Appointment>,
            }
        ]
    },
    {
        path: '/singUp',
        element: <SingUp></SingUp>
    },
    {
        path: '/login',
        element: <Login></Login>
    }
]);
export default router