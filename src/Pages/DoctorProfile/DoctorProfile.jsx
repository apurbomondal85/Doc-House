
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function DoctorProfile() {
    const {id} = useParams()
    const [doctor, setDoctor] = useState({});
    
    useEffect(() => {
        fetch(`http://localhost:5000/doctor/${id}`)
        .then(res => res.json())
        .then(data => setDoctor(data))
    },[])

  return (
    <div>
    </div>
  )
}

export default DoctorProfile
