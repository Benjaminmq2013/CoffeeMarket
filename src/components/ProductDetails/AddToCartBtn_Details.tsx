import React, { useContext } from 'react'
import CartContext from "../../context/CartContext"

const AddToCartBtn_Details = (product) => {
  const { addToCart } = useContext(CartContext)

  

  return (
    <button 
      onClick={()=> addToCart(product)}
    >
        
        Añadir al carrito
    </button>
  )
}

export default AddToCartBtn_Details