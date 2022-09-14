import React, { useContext } from 'react'
import CartContext from "../../context/CartContext"
import { useProductQuantity } from "../../Hooks/useProductQuantity"

const AddToCartButton = (product) => {
  const { addToCart, cartItems } = useContext(CartContext)
  const { increment } = useProductQuantity();

  function addMoreProduct(){
    if((cartItems).find(product => product.product.product_id === product.product.product_id)){
      increment()
      console.log('adding more product')
    }
    
  }
  

  return (
    <button 
      className="AddToCartButton"
      onClick={()=> {
        addToCart(product)
        addMoreProduct()
      }}
    >
        <img className="AddProduct-icon" src="/assets/Icons/add_to_cart.svg" alt="" />
        Añadir al carrito
    </button>
  )
}

export default AddToCartButton