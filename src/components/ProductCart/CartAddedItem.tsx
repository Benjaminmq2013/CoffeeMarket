import React, { useContext } from 'react'
import CartContext from '../../context/cart/CartContext';
import { shoppingCartProps } from '../../interfaces/shoppingCartProps';

interface params{
  product:shoppingCartProps
}

const CartAddedItem = (params:params) => {
  const { dispatch, state } = useContext( CartContext )
  return (
    <div className="Item_container">
          <div className="Product_icon">
            <img 
            onClick={ () => dispatch({ payload: { id: params.product.product_id }, type: 'REMOVE_ITEM' }) }
            src="assets/Icons/cancelar-icon.svg" 
            alt="" 
            />
          </div>

          <div className="Product_image">
            <img src={params.product.image_url} alt="" />
          </div>

          <div className="Nombre_precio">
            <p className="Nombre">{params.product.product_title}</p>
            <span className="Precios">
              <p className="Precio1">${params.product.product_price.toFixed(2)} </p>
              <p className="Precio2">${params.product.product_offer_price.toFixed(2)} </p>
            </span>
          </div>

          <div className="item_price--container">

            <div className="Item_buttons_container">
              <button 
                className="button_1"
                onClick={()=> dispatch({ payload: { id: params.product.product_id }, type: 'SUBSTRACT_PRODUCT' }) }
              >-</button>
              <button className="button_2">{ params.product.cart_product_quantity }</button>
              <button 
                onClick={()=> dispatch({ payload: { id: params.product.product_id }, type: 'MORE_PRODUCT' })}
              className="button_3">+</button>
            </div>
            <span className="cart_item_price">${(params.product.product_offer_price * params.product.cart_product_quantity).toFixed(2)}</span>
          </div>

        </div>
  )
}

export default CartAddedItem