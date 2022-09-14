import React, { useState } from 'react';
import SwiperCore, { Virtual, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import ProductItem from '../components/Products/ProductItem'
import useGetProducts from '../Hooks/useGetProducts'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

SwiperCore.use([Virtual, Navigation, Pagination]);

const Product_swiper = ( {zone} ) => {

  // ----- Responsive because mobile needs less items -----
  const [ slidesNumber, setSlidesNumber ] = useState(6)
  function myFunction(x) {
    if (x.matches) { // If media query matches
      setSlidesNumber(5)
    } 
  }
  function setRes950(res950) {
    if (res950.matches) { // If media query matches
      setSlidesNumber(4)
    } 
  }
  function setRes500(res500) {
    if (res500.matches) { // If media query matches
      setSlidesNumber(3)
    } 
  }
  
  React.useEffect(()=>{
    var x = window.matchMedia("(max-width: 1200px)")
    myFunction(x) // Call listener function at run time
    x.addListener(myFunction) // Attach listener function on state changes
    
    var res950 = window.matchMedia("(max-width: 950px)")
    setRes950(res950)
    res950.addListener(setRes950) 

    var res500 = window.matchMedia("(max-width: 500px)")
    setRes500(res500)
    res500.addListener(setRes500) 
  }, [])
 

  const products = useGetProducts();
  const [swiperRef, setSwiperRef] = useState(null);
  
  const renderByRegion =( zone, product, index ) =>{
    if(zone == product.zone){
      return(
        <SwiperSlide key={product.product_id} virtualIndex={index}>
              <div className="products_container">
                <div className="Products">
                  <ProductItem key={product.product_id} product={product} />
                </div>
              </div>
        </SwiperSlide>
      )
    }
    
  }
  return (
    <>
      
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={slidesNumber}
        centeredSlides={false}
        spaceBetween={0}
        pagination={{
          
        }}
        navigation={true}
        virtual
      >
        {products.map((product, index) => (
          renderByRegion(zone, product, index)
        ))}
      </Swiper>
    </>
  );
};



export default Product_swiper