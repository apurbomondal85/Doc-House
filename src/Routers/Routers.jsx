import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import DoctorProfile from "../Pages/DoctorProfile/DoctorProfile";
import SingUp from "../Pages/SingUp/SingUp";
import Login from "../Pages/Login/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Error from "../Pages/Error/Error";
import Appointment from "../Pages/Appointment/Appointment";
import Dashboard from "../Layout/Dashboard";
import MyAppointment from "../Pages/Dashboard/UserDashboard/MyAppointment/MyAppointment";
import MyReviews from "../Pages/Dashboard/UserDashboard/MyReviews/MyReviews";
import PaymentHistory from "../Pages/Dashboard/UserDashboard/PaymentHistory/PaymentHistory";
import DetailsDashboard from "../Pages/Dashboard/AdminDashboard/Dashboard/Dashboard";
import AllUsers from "../Pages/Dashboard/AdminDashboard/AllUser/AllUser";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error></Error>,
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
            },

        ]
    },
    {
        path: '/singUp',
        element: <SingUp></SingUp>
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/dashboard/my-appointment",
                element: <MyAppointment />,
            },
            {
                path: "/dashboard/my-reviews",
                element: <MyReviews />,
            },
            {
                path: "/dashboard/my-history",
                element: <PaymentHistory />
            },
            {
                path: "/dashboard/details-dashboard",
                element: <DetailsDashboard/>
            },
            {
                path: "/dashboard/all-users",
                element: <AllUsers/>
            }
        ]
    }
]);
export default router