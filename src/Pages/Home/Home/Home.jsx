import React from 'react'
import Banner from '../Banner/Banner'
import OurServices from '../OurServices/OurServices'
import OurDetails from '../OurDetails/OurDetails'
import PatientsReviews from '../PatientsReviews/PatientsReviews'

function Home() {
  return (
    <div className=''>
      <Banner></Banner>
      <OurServices></OurServices>
      <OurDetails></OurDetails>
      <PatientsReviews></PatientsReviews>
    </div>
  )
}

export default Home
