import React from 'react'
import LandingContactForm from '../components/LandingPage/LandingContactForm'
import LandingContactItem from '../components/LandingPage/LandingContactItem'

const LandingContactUs = () => {
  return (
    <div className="LandingContactUs" id="contactUs">
        <h2 className="contact_us-title">Contáctanos</h2>
        <h3 className="contact_us-subtitle">Para recibir más información acerca de nuestros productos:</h3>
        <div className="contact_section-wrapper">
          <LandingContactItem />
          <LandingContactForm />
        </div>
        
    </div>
  )
}

export default LandingContactUs