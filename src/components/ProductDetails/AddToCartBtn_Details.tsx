import React, { useContext } from 'react'
import CartContext from "../../context/cart/CartContext"
import { shoppingCartProps } from '../../interfaces/shoppingCartProps';

interface params {
  product: shoppingCartProps
}

const AddToCartBtn_Details = (params:params) => {
  
  const { state, dispatch } = useContext(CartContext)

  return (
    <button 
      onClick={()=> dispatch({ payload: params.product, type: 'ADD_TO_CART' }) }
    >
        
        Añadir al carrito
    </button>
  )
}

export default AddToCartBtn_Details