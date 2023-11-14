import React from 'react'
import Banner from '../Banner/Banner'
import OurServices from '../OurServices/OurServices'
import OurDetails from '../OurDetails/OurDetails'
import PatientsReviews from '../PatientsReviews/PatientsReviews'
import OurDoctors from '../OurDoctors/OurDoctors'
import ContactSection from '../Contact/ContactSection'
import { Helmet } from 'react-helmet'

function Home() {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner></Banner>
      <OurServices></OurServices>
      <OurDetails></OurDetails>
      <PatientsReviews></PatientsReviews>
      <OurDoctors></OurDoctors>
      <ContactSection></ContactSection>
    </div>
  )
}

export default Home
