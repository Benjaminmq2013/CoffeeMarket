import Link from 'next/link'
import React from 'react'

const LandingContactItem = () => {
  return (
    <div className="ContactItems-wrapper">
        <a className="LandingContactItem" href="https://wa.me/50377297675">
            <img className="contact_icon" src="assets/Icons/social/whatsapp.svg" alt="" />
            <h5 className="Landing_contact-title">Whatsapp</h5>
            <h6 className="Landing_contact-name" >+503 7729-7675</h6>
        </a>

        <a className="LandingContactItem" href="https://www.instagram.com/coffee_market_503/?hl=en">
            <img className="contact_icon" src="assets/Icons/social/instagram.svg" alt="" />
            <h5 className="Landing_contact-title">Instagram</h5>
            <h6 className="Landing_contact-name" >@coffeemarket503</h6>
        </a>

        <a className="LandingContactItem" href="https://www.facebook.com/CoffeeMarket503/">
            <img className="contact_icon" src="assets/Icons/social/facebook.svg" alt="" />
            <h5 className="Landing_contact-title">Facebook</h5>
            <span className="Landing_contact-name">/coffeemarket503/</span>
        </a>

        <div className="LandingContactItem">
            <img className="contact_icon" src="assets/Icons/landing/contact_website.svg" alt="" />
            <h5 className="Landing_contact-title">Website</h5>
            <a className="Landing_contact-name" href="#">coffeemarket.com</a>
        </div>
    </div>
  )
}

export default LandingContactItem