import axios from "axios"
import { Button } from "flowbite-react"
import { useState } from "react"
import { FaTrash } from "react-icons/fa6"
import Swal from "sweetalert2"

function ReviewList({ service }) {
    const [selectService, setSelectService] = useState(service);
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios({
                    method: 'DELETE',
                    url: `https://doc-house-server-nc9o54us0-apurbomondal85.vercel.app/deleteAppointment/${id}`
                })
                    .then(data => {
                        if (data.data.acknowledged) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = selectService.filter(item => item?._id !== id)
                            setSelectService(remaining)
                        }
                    })
            }
        })
    }

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg lg:ml-12">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="px-4 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-4 py-3">
                            Date
                        </th>
                        <th scope="col" className="px-4 py-3">
                            Service
                        </th>
                        <th scope="col" className="px-4 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        selectService.map(item =>
                            <tr key={item._id} className="bg-white border-b whitespace-nowrap">
                                <td className="px-6 py-4">
                                    {item?.name}
                                </td>
                                <td className="px-6 py-4">
                                    {item?.date}
                                </td>
                                <td className="px-6 py-4">
                                    {item?.treatment}
                                </td>
                                <td className="px-6 py-4">
                                    <Button onClick={() => handleDelete(item?._id)} className="bg-[#d52d2d] enabled:hover:bg-[#d52d2d]"><FaTrash /></Button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ReviewList
