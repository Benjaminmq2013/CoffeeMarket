import React from 'react'
import MenuAdministracion from '../containers/MenuAdministracion'
import Menuadministrar from '../components/administrar/Menuadministrar'
import Navbar from "../containers/Navbar"
import Footer from "../containers/Footer"

const administrar = () => {
  return (
    <div>
        <Navbar/>
        <Menuadministrar/>
        <MenuAdministracion/>
        <Footer/>
        
    </div>
  )
}

export default administrar