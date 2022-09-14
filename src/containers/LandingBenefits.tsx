import React from 'react'
import BenefitItems from '../components/LandingPage/BenefitItems'
import BenefitsDescription from '../components/LandingPage/BenefitsDescription'

const LandingBenefits = () => {
  return (
    <div className="LandingBenefits">
      <img className="coffee_icons_light" src="assets/Icons/landing/coffee_icons_light.svg" alt="" />
      
      <div className="LandingWrapper">
        <BenefitsDescription />
        <BenefitItems />
      </div>
    </div>
  )
}

export default LandingBenefits