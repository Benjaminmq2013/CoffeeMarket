import NavUsers from "../components/Users/NavUsers";
import User1 from "../components/Users/User1";
import Navbar from "../containers/Navbar";
import Footer from "../containers/Footer";
import React from 'react'

const users = () => {
  return (
    <div>
        <Navbar/>
        <NavUsers/>
        <User1/>
        <Footer/>
    </div>
  )
}

export default users