import React from 'react'
import LandingNavbarItem from '../components/LandingPage/LandingNavbarItem'
import NavMenuButton from '../components/Navbar/NavMenuButton'


const LandingPageNavbar = () => {
  return (
    <div className="navbar landing_navbar">
    <div className="navbar-wrapper landing_navbar-wrapper">
        <NavMenuButton />
        <LandingNavbarItem />
    </div>
</div>
    
  )
}

export default LandingPageNavbar