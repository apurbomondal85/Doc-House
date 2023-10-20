import axios from "axios";
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../../../Provider/AuthProvider";
import AppointmentList from "../AppointmentList/AppointmentList";
import { Spinner } from "flowbite-react";


function MyAppointment() {
    const { user, token } = useContext(AuthContext);
    const [selectAppointment, setSelectAppointment] = useState([]);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        if (user?.email && token) {
            axios({
                method: 'get',
                headers: { "authorization": `berrer ${token}` },
                url: `http://localhost:5000/appointmentBook/${user?.email}`
            },
                { email: user?.email })
                .then(data => {
                    setSelectAppointment(data.data)
                    setLoader(false)
                })
        }
    }, [token])

    if (loader) {
        return <div className="h-[500px] w-full flex justify-center items-center"><Spinner aria-label="Default status example" /></div>
    }

    return (
        <div className="pr-16">
            <AppointmentList appointment={selectAppointment} />
        </div>
    )
}

export default MyAppointment
