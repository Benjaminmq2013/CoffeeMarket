import React from 'react'
import ProductStars from './ProductStars';

const RecomendationsItem = () => {
  return (
    <>
      <div className="RecomendationsItem" >
        <figure className="productImage-container landing_product">
          <img className="productImage" src="/assets/Images/Cojulte v2.JPG" alt=""/>
        </figure>
        <ProductStars />
        <span className="productTitle landing_product-title">
          Café Cojute 400gr
        </span>
        <p className="landing_product_description">
          Café tostado y molido, 100% salvadoreño de las fincas de Cojutepeque.
          Presentación de 400gr en empaque dorado.
        </p>
        <a className="LandingProductLink">Ver en la tienda</a>
      </div>

      <div className="RecomendationsItem">
        <figure className="productImage-container landing_product">
          <img className="productImage" src="/assets/Images/Cuzca Plus v2.JPG" alt=""/>
        </figure>
        <ProductStars />
        <span className="productTitle landing_product-title">
        Café Cuzca Plus 400gr
        </span>
        <p className="landing_product_description">
            Café tostado y molido, 100% salvadoreño de las fincas
            de Chalchuapa, Santa Ana. Presentación de 400gr.
        </p>
        <a className="LandingProductLink">Ver en la tienda</a>
      </div>

      <div className="recomendationItem-responsive">
        <figure className="productImage-container landing_product">
          <img className="productImage" src="/assets/Images/Cuzcachapa v2.JPG" alt=""/>
        </figure>
        <ProductStars />
        <span className="productTitle landing_product-title">
            Café Cuzcachapa 400gr
        </span>
        <p className="landing_product_description">
            Café tostado y molido, 100% salvadoreño de las fincas de
            Chalchuapa, Santa Ana. Presentación de 400gr.
        </p>
        <a className="LandingProductLink">Ver en la tienda</a>
      </div>
    </>
  );
};

export default RecomendationsItem