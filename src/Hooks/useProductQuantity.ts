import { useState } from "react"

export const useProductQuantity = () => {
  const [ state, setState ] = useState({
      product_quantity: 1,
      total_cart: 0,
  })
  const { product_quantity, total_cart } = state;
  const increment = () =>{      
      setState({
          ...state,
          product_quantity: product_quantity + 1
      });
  }
  const decrement = () =>{
      if (state.product_quantity > 1){
          setState({
            ...state,
            product_quantity: product_quantity - 1
        });
        }
    }


  return{
      state,
      increment,
      decrement
  }
}
