import React from 'react'
import Product_swiper from '../swiper/demo'

const LandingStore = () => {
  return (
    <section className="store_section" id="store">
      <h2 className="Landing-Store-title">Nuestro catálogo</h2>
      <div className="landing_products-container">
        <h3 className="landing_products-subtitle">Occidente</h3>
        <Product_swiper zone="Occidente" />
      </div>

      <div className="landing_products-container">
        <h3 className="landing_products-subtitle">Central</h3>
        <Product_swiper zone="Central" />
      </div>

      <div className="landing_products-container">
        <h3 className="landing_products-subtitle">Oriente</h3>
        <Product_swiper zone="Oriente" />
      </div>
    </section>
  )
}

export default LandingStore