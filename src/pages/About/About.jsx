import React from 'react'
import AboutHeader from '../AboutHaeader/AboutHeader'
import AboutTeam from './AboutTeam/AboutTeam'
import OfficeLocation from './Offer/OfficeLocation'
import Footer from '../Footer/Footer'

const About = () => {
  return (
    <div >
       <AboutHeader />
       <AboutTeam />
       {/* <OfficeLocation /> */}
       <Footer />
       </div>
  )
}

export default About