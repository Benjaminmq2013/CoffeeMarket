import React from 'react'
import Footer from '../containers/Footer'
import Hero from '../containers/Hero'
import Navbar from '../containers/Navbar'
import Products from '../containers/Products'
import MenuNav from "../materialize/MenuNav"



const Home = () => {
  return (
    <>
      <Navbar />
      <MenuNav/>
      <Hero />
      <Products />
      
      <Footer />
    </>
  )
}

export default Home