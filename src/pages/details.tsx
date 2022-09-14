import React from 'react'
import Navbar from "../containers/Navbar"
import ProductItem from '../components/ProductDetails/ProductItem'
import ProductItemDetails from '../components/ProductDetails/ProductItemDetails'
import Footer from "../containers/Footer"
import Recomendations from "../components/ProductDetails/Recomendations"
import { productList } from '../db/productList'
import MenuNav from "../materialize/MenuNav"



const details = () => {
  return (
    <>
      <Navbar />
      <MenuNav />
      <div className="main_container">
        <div className="container_1">
          <ProductItem />
          <ProductItemDetails />
        </div>
        <section className="main_recomendations_container">
          <div className="Products">
            {productList.map((product) => (
              <Recomendations key={product.product_id} product={product} />
            ))}
          </div>
        </section>
      </div>

      <div className='footer_responsive'> 
      

      <Footer/>

      </div>
    </>
  );
};

export default details