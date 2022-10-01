import React, { useContext } from 'react'
import CartContext from "../../context/cart/CartContext"

const Checkout_summary = () => {
    const { state, dispatch } = useContext(CartContext)
  return (
    <div>
        <p className='pago-p'>Pago</p>
        
        <div className='container_checkout_summary'>

            <div className='summary_tittle'>
                <p className='summary_tittle-p'>RESUMEN DE LA COMPRA</p>
                <p className='element-p'>3 elementos:</p>
            </div>

            <div className='summary_products'>
                <div className='summary_products-list'>
                    {state.map( product =>(
                        <p key={ product.product_id}>{ product.product_title }</p>
                    ))}
                    <p className='product_envio-p'>Envío</p>                      

                </div>

                <div className='summary_products-price'>
                    
                    {state.map(product =>(
                        <p key={ product.product_id }>${ product.product_offer_price.toFixed(2) }</p>
                    ))}
                    <p className='product_total-price'>$10.77</p>
                </div>
            </div>
            <span className='hr_summary-product'>
            <hr/>
            </span>

            <div className='summary_total-products'>
                <p>Total:</p>
                <p className='summary_total-number'>${state.reduce(
                    (previousValue, currentValue)=> previousValue + (currentValue.product_offer_price * currentValue.cart_product_quantity ) , 0
                ).toFixed(2)} USD</p>

            </div>
        </div>


    </div>
  )
}

export default Checkout_summary