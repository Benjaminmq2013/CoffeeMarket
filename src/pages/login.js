import React from 'react'
import Navbar from '../containers/Navbar'
import Footer from "../containers/Footer"
import LoginForm from "../containers/LoginForm"
import MenuNav from "../materialize/MenuNav"

const login = () => {
  return (
    <>
        <Navbar />
        <MenuNav />
        <LoginForm />
        <Footer />
    </>
  )
}

export default login