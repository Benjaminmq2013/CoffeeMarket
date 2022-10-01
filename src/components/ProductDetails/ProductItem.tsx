import React, { useContext } from 'react'
import { productList } from "../../db/productList"
import { AppContext } from '../../context/checkout/productsContext'
import Link from 'next/link'
import AddToCartBtn_Details from './AddToCartBtn_Details'
import ProductDetailSwiper from '../../swiper/ProductDetailSwiper'



const ProductItem = () => {
    const { products , setProducts } = useContext(AppContext)
    const defaultProduct = productList[0]
    
  return (
    <>
        <section className='main_container_nav'>
            <div className='main_container_nav-product'>
            <div className="main_nav">
                <img className='layer' src="assets/Icons/back button.svg" alt=""/>
                <Link href="/">
                    <a className='volver'>Cerrar</a>
                </Link>
            </div>

            <div className="main_product" id='main_product'>
                <ProductDetailSwiper />
                
                <AddToCartBtn_Details product={products}/>
            </div>

            </div>
            <div className='main_product_precio_container'>
            <div className="main_product_precio">
                <p className="precio_1">${ products.product_price || defaultProduct.product_price}/u</p>
                <p className="precio_2">${ products.product_offer_price || defaultProduct.product_offer_price }/u</p>
            </div>

            <div className="main_product_buttons">
                <button className="button_1">-</button>
                <button className="button_2">1</button>
                <button className="button_3">+</button>
            </div>
            <div className="main_description">
                <h1>{ products.product_title || defaultProduct.product_title }</h1>
                <p>{ products.product_description || defaultProduct.product_description }</p>
            </div>
            </div>

        </section>
    </>
  )
}

export default ProductItem