import React, { useContext } from "react";
import { AppContext } from "../../context/checkout/productsContext";

import AddToCartButton from "../Products/AddToCartButton";

const Recomendations = ({ product }) => {
  const { products , setProducts } = useContext(AppContext)
  return (
    <>
      <div className="ProductItem productItemRecomendation">
        <figure className="productImage-container">
          <img
            className="productImage"
            src={product.image_url} 
            alt={product.product_title}
            onClick={()=> setProducts(product)}
          />
        </figure>
        <span className="productTitle" onClick={()=> setProducts(product)}>{product.product_title}</span>
        <div>
          <span className="productLastPrice">${product.product_price.toFixed(2)}/u</span>
          <span className="productPrice">${product.product_offer_price.toFixed(2)}/u</span>
        </div>
        <AddToCartButton product={ product }/>
        <a className="seeDetailsButton"  onClick={()=> setProducts(product)}>
          Ver detalles
          <img
            className="MoreDetails-icon"
            src="/assets/Icons/products/next.svg"
            alt=""
          />
        </a>
      </div>
    </>
  );
};

export default Recomendations;
