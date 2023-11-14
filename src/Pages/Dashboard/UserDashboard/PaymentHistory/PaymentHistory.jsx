
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../../Provider/AuthProvider';
import { Spinner } from 'flowbite-react';
import { Helmet } from 'react-helmet';

function PaymentHistory() {
    const { user, token } = useContext(AuthContext);
    const [paymentHistory, setPaymentHistory] = useState();
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        if (user?.email && token) {
            axios({
                method: 'get',
                headers: { "authorization": `berrer ${token}` },
                url: `https://doc-house-server-nc9o54us0-apurbomondal85.vercel.app/payment-history/${user?.email}`
            })
                .then(data => {
                    const remaining = data.data.filter(item => item?.email === user?.email);
                    setPaymentHistory(remaining);
                    setLoader(false)
                })
        }
    }, [token])

    if (loader) {
        return <div className="h-[500px] w-full flex justify-center items-center"><Spinner aria-label="Default status example" /></div>
    }

    return (
        <div className='ml-4 lg:ml-12'>
            <Helmet><title>Payment-History</title></Helmet>
            <h1 className='text-2xl lg:text-3xl font-bold text-center lg:text-left mb-4 lg:mb-10'>My Payment History</h1>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-4 py-3 text-[16px]">
                                ID
                            </th>
                            <th scope="col" className="px-4 py-3 text-[16px]">
                                NAME
                            </th>
                            <th scope="col" className="px-4 py-3 text-[16px]">
                                PRICE
                            </th>
                            <th scope="col" className="px-4 py-3 text-[16px]">
                                STATUS
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            paymentHistory?.map(item =>
                                <tr key={item._id} className="bg-white border-b whitespace-nowrap">
                                    <td className="px-4 py-4">
                                        {item?.paymentId}
                                    </td>
                                    <td className="px-4 py-4">
                                        {item?.name}
                                    </td>
                                    <td className="px-4 py-4">
                                        ${item?.price}
                                    </td>
                                    <td className="px-4 py-4 text-yellow-400">
                                        {item?.status}
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

export default PaymentHistory
