
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CoverPage from '../CoverPage/CoverPage';
import DoctorCart from '../DoctorDetails/DoctorCart/DoctorCart';

function DoctorProfile() {
    const { id } = useParams()
    const [doctor, setDoctor] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/doctor/${id}`)
            .then(res => res.json())
            .then(data => setDoctor(data))
    }, [])

    return (
        <div className='bg-[#F3F3F3]'>
            <CoverPage title="Doctor Profile" subTitle="Doctor Profile" ></CoverPage>
            <div className="container py-16">
                <DoctorCart doctor={doctor}></DoctorCart>
            </div>
        </div>
    )
}

export default DoctorProfile
