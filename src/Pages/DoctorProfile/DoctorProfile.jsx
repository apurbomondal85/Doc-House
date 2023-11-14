
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CoverPage from '../CoverPage/CoverPage';
import DoctorCart from '../DoctorDetails/DoctorCart/DoctorCart';
import DoctorData from '../DoctorDetails/DoctorData/DoctorData';
import { Helmet } from 'react-helmet';

function DoctorProfile() {
    const { id } = useParams()
    const [doctor, setDoctor] = useState({});

    useEffect(() => {
        fetch(`https://doc-house-server-nc9o54us0-apurbomondal85.vercel.app/doctor/${id}`)
            .then(res => res.json())
            .then(data => setDoctor(data))
    }, [])

    return (
        <div className='bg-[#F3F3F3]'>
            <Helmet>
                <title>Doctor-Profile</title>
            </Helmet>
            <CoverPage title="Doctor Profile" subTitle="Doctor Profile" ></CoverPage>
            <div className="container py-16">
                <DoctorCart doctor={doctor}></DoctorCart>
                <DoctorData doctor={doctor}></DoctorData>
            </div>
        </div>
    )
}

export default DoctorProfile
