import React from 'react'
import LandingPageNavbar from '../containers/LandingPageNavbar'
import LandingHero from '../containers/LandingHero'
import LandingRecomendations from '../containers/LandingRecomendations'
import LandingBenefits from '../containers/LandingBenefits'
import LandingComments from '../containers/LandingComments'
import LandingContactUs from '../containers/LandingContactUs'
import Footer from '../containers/Footer'
import LandingStore from '../containers/LandingStore'
import Proximamente from '../containers/Proximamente'
import MenuNav from "../materialize/MenuNav"

const Landing = () => {
  return (
    <>
      <LandingPageNavbar />
      <LandingHero />
      <LandingRecomendations />
      <LandingStore />
      <Proximamente />
      <LandingBenefits />
      {/* <LandingComments /> */}
      <LandingContactUs />
      <MenuNav />
      <Footer />
    </>
  )
}

export default Landing