
import React, { useEffect, useState } from 'react'
import DoctorCart from './DoctorCart/DoctorCart';

function OurDoctors() {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        try {
            fetch('https://doc-house-server-nc9o54us0-apurbomondal85.vercel.app/doctors')
                .then(res => res.json())
                .then(data => setDoctors(data))
        } catch (error) {
            console.error('Error fetching data:', error)
        }
    }, [])

    return (
        <div className='container lg:py-16'>
            <div className="space-y-4 text-center w-[95%] lg:w-[70%] mx-auto">
                <h1 className="text-3xl lg:text-4xl font-semibold">Our Expert Doctors</h1>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            </div>
            <div className="pt-16 lg:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
                {
                    doctors.slice(0, 3).map(items => <DoctorCart key={items._id} doctor={items}></DoctorCart>)
                }
            </div>
        </div>
    )
}

export default OurDoctors
