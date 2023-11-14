import { Button, Modal } from "flowbite-react"
import PayMent from "../PayMent/PayMent"
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../../../Provider/AuthProvider";

function AppointmentList({ appointment }) {
    const [openModal, setOpenModal] = useState();
    const [services, setServices] = useState();
    const props = { openModal, setOpenModal };
    const [selected, setSelected] = useState();
    const [paymentId, setPaymentId] = useState(null);
    const [selectedId, setSelectedId] = useState(null);
    const [appointments, setAppointments] = useState(appointment);

    const handlePayBtn = (items) => {
        const selectAppointment = services?.filter(item => item?.category_name === items?.treatment);
        setSelected(selectAppointment);
        setSelectedId(items?._id)
        props.setOpenModal('dismissible')
    }

    const closeModal = () => {
        props.setOpenModal(undefined)
    }
    const getPaymentId = (condition) => {
        if (condition) {
            setPaymentId(selectedId)
        }
    }

    useEffect(() => {
        axios.get('https://doc-house-server-nc9o54us0-apurbomondal85.vercel.app/services')
            .then(data => setServices(data.data))
    }, [])

    useEffect(() => {
        if (paymentId) {
            axios.delete(`https://doc-house-server-nc9o54us0-apurbomondal85.vercel.app/deleteAppointment/${paymentId}`)
                .then(data => {
                    if (data) {
                        const remaining = appointments.filter(item => item._id !== paymentId);
                        setAppointments(remaining)
                    }
                })
        }
    }, [paymentId])

    return (
        <div className="sm:rounded-lg lg:ml-12">
            <h1 className='text-3xl text-center lg:text-left font-bold mb-10'>My Appointment</h1>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 whitespace-nowrap">
                        <tr>
                            <th scope="col" className="px-4 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-4 py-3">
                                Date
                            </th>
                            <th scope="col" className="px-4 py-3">
                                Time
                            </th>
                            <th scope="col" className="px-4 py-3">
                                TREATMENT
                            </th>
                            <th scope="col" className="px-4 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map(item =>
                                <tr key={item._id} className="bg-white border-b whitespace-nowrap">
                                    <td className="px-6 py-4">
                                        {item?.name}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item?.date}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item?.time}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item?.treatment}
                                    </td>
                                    <td className="px-6 py-4">
                                        <Button onClick={() => handlePayBtn(item)} className="bg-[#07332F] enabled:hover:bg-[#07332F]">Pay</Button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>

            <Modal dismissible show={props.openModal === 'dismissible'} onClose={() => props.setOpenModal(undefined)}>
                <Modal.Header />
                <PayMent selectAppointment={selected ? selected : []} closeModal={closeModal} getPaymentId={getPaymentId}></PayMent>
            </Modal>
        </div>
    )
}

export default AppointmentList
