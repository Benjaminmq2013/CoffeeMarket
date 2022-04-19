import React, { useContext } from 'react'
import CartContext from '../../context/CartContext';
import { useProductQuantity } from "../../Hooks/useProductQuantity"


const CartAddedItem = ({ product }) => {
  const { removeItem, moreProduct, substractProduct } = useContext( CartContext )
  const { state, increment, decrement } = useProductQuantity();

  return (
    <div className="Item_container">
          <div className="Product_icon">
            <img 
            onClick={ ()=>  removeItem(product.product_id)}
            src="assets/Icons/cancelar-icon.svg" 
            alt="" 
            />
          </div>

          <div className="Product_image">
            <img src={product.image_url} alt="" />
          </div>

          <div className="Nombre_precio">
            <p className="Nombre">{product.product_title}</p>
            <span className="Precios">
              <p className="Precio1">${product.product_price.toFixed(2)} </p>
              <p className="Precio2">${product.product_offer_price.toFixed(2)} </p>
            </span>
          </div>

          <div className="item_price--container">

            <div className="Item_buttons_container">
              <button 
                className="button_1"
                onClick={()=> substractProduct(product)}
              >-</button>
              <button className="button_2">{ product.cart_product_quantity }</button>
              <button 
                onClick={()=> moreProduct(product)}
              className="button_3">+</button>
            </div>
            <span className="cart_item_price">${(product.product_offer_price * product.cart_product_quantity).toFixed(2)}</span>
          </div>

        </div>
  )
}

export default CartAddedItem