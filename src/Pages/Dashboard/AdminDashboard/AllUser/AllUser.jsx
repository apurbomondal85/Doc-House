
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../../Provider/AuthProvider';
import axios from 'axios';
import { Button, Spinner } from 'flowbite-react';
import { FaTrash, FaUser } from 'react-icons/fa6';
import { Helmet } from 'react-helmet';

function AllUsers() {
    const { user, token } = useContext(AuthContext);
    const [users, setUsers] = useState([]);
    const [loader, setLoader] = useState(true);

    const handleDelete = (id) => {
        axios.delete(`https://doc-house-server-nc9o54us0-apurbomondal85.vercel.app/users/${id}`)
            .then(data => {
                if (data) {
                    const remaining = users.filter(item => item?._id !== id);
                    setUsers(remaining)
                }
            })
    }

    const makeAdmin = (id) => {
        axios.patch(`https://doc-house-server-nc9o54us0-apurbomondal85.vercel.app/users/${id}`)
            .then(res => {
                if (res.data) {
                    const ext = users.filter(item => item?._id !== id);
                    const remaining = users.filter(item => item?._id === id);
                    remaining[0].role = "admin"
                    setUsers([...ext, ...remaining]);
                }
            })
    }


    useEffect(() => {
        if (user?.email && token) {
            axios({
                method: "get",
                headers: { "authorization": `berrer ${token}` },
                url: `https://doc-house-server-nc9o54us0-apurbomondal85.vercel.app/users/${user?.email}`
            })
                .then(data => {
                    setUsers(data.data)
                    setLoader(false)
                })
        }
    }, [token])

    if (loader) {
        return <div className="h-[500px] w-full flex justify-center items-center"><Spinner aria-label="Default status example" /></div>
    }

    return (
        <div className='ml-4 lg:ml-12 min-h-screen'>
            <Helmet>
                <title>All Users</title>
            </Helmet>
            <h1 className='text-3xl font-bold text-center lg:text-left mb-4 lg:mb-8'>All Users</h1>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Role
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(item =>
                                <tr key={item._id} className="bg-white border-b whitespace-nowrap">
                                    <th className="px-6 py-4">
                                        {item?.email}
                                    </th>
                                    <td className="px-6 py-4 text-[#07332F]">
                                        {item?.role === "admin" ? item?.role : <Button onClick={() => makeAdmin(item?._id)} className="bg-[#07332F] text-white border border-[#07332F] hover:text-[#07332F] enabled:hover:bg-white"><FaUser /></Button>}
                                    </td>
                                    <td className="px-6 py-4">
                                        <Button onClick={() => handleDelete(item?._id)} className="bg-[#ed4646] text-white border border-[#ed4646] hover:text-[#ed4646] enabled:hover:bg-white"><FaTrash /></Button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AllUsers
