import React, { useContext } from 'react'
import CartContext from "../../context/cart/CartContext"
import { productListProps } from '../../interfaces/productListProps'

interface params{
  product:productListProps
}

const AddToCartButton = (params:params) => {
  const { state, dispatch } = useContext(CartContext)

  function addMoreProduct(){
    if((state).find(product => product.product_id === params.product.product_id)){
      dispatch({ payload: { id: params.product.product_id }, type: 'MORE_PRODUCT' })
    } else{
      dispatch({ payload: params.product, type: "ADD_TO_CART" })
    }   
  }
  

  return (
    <button 
      className="AddToCartButton"
      onClick={()=> {        
        addMoreProduct()
      }}
    >
        <img className="AddProduct-icon" src="/assets/Icons/add_to_cart.svg" alt="" />
        Añadir al carrito
    </button>
  )
}

export default AddToCartButton