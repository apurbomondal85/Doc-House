import { Button, Modal } from "flowbite-react"
import PayMent from "../PayMent/PayMent"
import { useState } from "react";

function AppointmentList({ appointment }) {
    const [openModal, setOpenModal] = useState();
    const props = { openModal, setOpenModal };


    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg ml-12">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                        appointment.map(item =>
                            <tr key={item._id} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {item?.name}
                                </th>
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
                                    <Button onClick={() => props.setOpenModal('dismissible')} className="bg-[#07332F] enabled:hover:bg-[#07332F]">Pay</Button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <Modal dismissible show={props.openModal === 'dismissible'} onClose={() => props.setOpenModal(undefined)}>
                <Modal.Header />
                <PayMent></PayMent>
            </Modal>
        </div>
    )
}

export default AppointmentList
