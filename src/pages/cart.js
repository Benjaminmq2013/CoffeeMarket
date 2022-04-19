import React from 'react'
import CheckoutCart from "../components/ProductCart/CheckoutCart"
import CartContainer from "../components/ProductCart/CartContainer"

const cart = () => {
  return (
    <div>
        <CheckoutCart />
        <CartContainer />
    </div>
  )
}

export default cart