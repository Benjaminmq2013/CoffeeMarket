import React from 'react'
import Link from 'next/link'
import Video_hero from '../components/Navbar/Video_hero'


const LandingHero = () => {
  return (
    <div className="LandingHeroContainer" id="aboutUs">
        <div className="LandingHero">
            <Video_hero />
            <div className="">
                
                <div className="aboutUs">
                   
                    <div className="landing_buttons">
                        <Link href="#store">
                            <a  className="landing-catalogo">Ver Catálogo</a>
                        </Link>
                        
                    </div>
                </div>
            </div>
           
        </div>
        <img className="See_more_icon" src="assets/Icons/landing/seeMore.svg" alt="" />
    </div>
  )
}

export default LandingHero