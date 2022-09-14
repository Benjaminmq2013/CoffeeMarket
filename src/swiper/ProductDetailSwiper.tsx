import React, { useContext } from 'react'
import { productList } from "../db/productList"

import { AppContext } from '../context/productsContext'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";


const ProductDetailSwiper = () => {
    const [ products , setProducts ] = useContext(AppContext)
    const defaultProduct = productList[0]
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
            <figure className="product_details-image">
                <img className='imagen' src={products.image_url || defaultProduct.image_url} alt="" />
            </figure>
        </SwiperSlide>
        <SwiperSlide>
            <figure className="product_details-image">
                <img className='imagen' src={products.image_url || defaultProduct.image_url} alt="" />
            </figure>
        </SwiperSlide>
    </Swiper>
  )
}

export default ProductDetailSwiper