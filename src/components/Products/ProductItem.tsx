import React from "react";
import AddToCartButton from "./AddToCartButton";
import { useContext } from "react"
import { AppContext } from "../../context/checkout/productsContext";
import Link from "next/link";
import ReactTooltip from "react-tooltip";

const ProductItem = ({ product }) => {
  const { products , setProducts } = useContext(AppContext)
  return (
    <>
        <div 
          className="ProductItem" 
          onClick={() => setProducts(product)} 
          data-tip=' '         
          data-for={product.produc_id}
        >
          <Link href="/details" >
            <figure  className="productImage-container">
              <img className="productImage" src={product.image_url} alt={product.product_title}/>
            </figure>
          </Link>
          

          <Link href="/details">
            <span className="productTitle">{product.product_title}</span>
          </Link>

          <Link href="/details">
            <div>
              <span className="productLastPrice">${product.product_price.toFixed(2)}/u</span>
              <span className="productPrice">${product.product_offer_price.toFixed(2)}/u</span>
            </div>
          </Link>
          <AddToCartButton product={ product }/>            
        </div>
        
        <ReactTooltip 
          id={product.produc_id}
          place="bottom"
          type="info"           
          effect="solid"
          offset={{top: 350, left: 0}}
        >
          Click para ver detalles 
        </ReactTooltip>
      
    </>
  );
};

export default ProductItem;
