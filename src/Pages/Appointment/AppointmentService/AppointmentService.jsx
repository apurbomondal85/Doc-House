
import React, { useEffect, useState } from 'react'

function AppointmentService({date}) {
const [services, setServices] = useState([]);

useEffect(() => {
    fetch('https://doc-house-server-nc9o54us0-apurbomondal85.vercel.app/services')
    .then(res => res.json())
    .then(data => setServices(data))
},[])


    return (
        <div className='py-20'>
            <p className='text-[#F7A582] text-center'>Available Services on {date?.toDateString()}</p>
            <h1 className='text-3xl lg:text-4xl text-center mt-2 lg:mt-4'>Please select a service.</h1>
            <div className="lg:mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
                {
                    services?.map(item => 
                        <div key={item?._id} className='flex items-center justify-center gap-6 p-6 rounded-md shadow bg-white mt-8'>
                            <div className="p-4 bg-[rgba(255,85,85,0.1)] rounded-md"><img src={item?.category_image_url} alt="" /></div>
                            <h2 className="text-xl lg:text-2xl">{item?.category_name}</h2>
                        </div>
                        )
                }
            </div>
        </div>
    )
}

export default AppointmentService
