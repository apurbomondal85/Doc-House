import axios from "axios";
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../../../Provider/AuthProvider";
import AppointmentList from "../AppointmentList/AppointmentList";
import { Spinner } from "flowbite-react";
import { Helmet } from "react-helmet";

function MyAppointment() {
    const { user, token } = useContext(AuthContext);
    const [selectAppointment, setSelectAppointment] = useState([]);
    const [loader, setLoader] = useState(true);
    
    useEffect(() => {
        if (user?.email && token) {
            axios({
                method: 'get',
                headers: { "authorization": `berrer ${token}` },
                url: `https://doc-house-server-nc9o54us0-apurbomondal85.vercel.app/appointmentBook/${user?.email}`
            },
                { email: user?.email })
                .then(data => {
                    const remaining = data.data.filter(item => item?.userEmail === user?.email)
                    setSelectAppointment(remaining)
                    setLoader(false)
                })
        }
    }, [token])

    if (loader) {
        return <div className="h-[500px] w-full flex justify-center items-center"><Spinner aria-label="Default status example" /></div>
    }

    return (
        <div className="lg:pr-16">
            <Helmet><title>My-Appointment</title></Helmet>
            <AppointmentList appointment={selectAppointment} />
        </div>
    )
}

export default MyAppointment
