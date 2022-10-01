import React, { useContext } from 'react'
import CartAddedItem from './CartAddedItem';
import Cart from "../../containers/Cart"
import CartContext from "../../context/cart/CartContext"
import Link from 'next/link';



const CartContainer = () => {
  const { state, dispatch } = useContext(CartContext)
  if(state.length == 0){
    return (
      <Cart />
    );

  } else{

    return(
      <div className="Main_container">
            <section className="Main_container">
              
              {
                state.map((product, index) =>(
                  
                  <CartAddedItem product={product} key={product.product_id}/>
                  
                ))
              }
              
              
            </section>
      
            <div className="Terminar_pedido_container">
              <div className="Total">
                <hr className="hr_1" />
      
                <div className="Total_Precio">
                  <p className="Precio_total">Precio total:</p>
                  <p className="Precio_total_num">
                    ${ state.reduce(
                      (previousValue, currentValue) => 
                      previousValue + (currentValue.product_offer_price * currentValue.cart_product_quantity),
                      0
                    ).toFixed(2) } USD
                  </p>
                </div>
              </div>
              <div className="Realizar_pedido">
                <Link href="/checkout">
                  <a className="Realizar_pedido_button">Ingresar Dirección</a>
                </Link>
                
                {/* <a className="Descuento" href="">
                  ¿Tienes un código de descuento?
                </a> */}
              </div>
            </div>
          </div>
          )
  }
}

export default CartContainer