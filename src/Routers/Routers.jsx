import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import DoctorProfile from "../Pages/DoctorProfile/DoctorProfile";
import SingUp from "../Pages/SingUp/SingUp";
import Login from "../Pages/Login/Login";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/doctor-profile/:id",
                element: <DoctorProfile></DoctorProfile>,
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