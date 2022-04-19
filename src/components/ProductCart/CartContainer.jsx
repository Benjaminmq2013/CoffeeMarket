import React, { useContext } from 'react'
import CartAddedItem from './CartAddedItem';
import Cart from "../../containers/Cart"
import CartContext from "../../context/CartContext"
import Link from 'next/link';



const CartContainer = () => {
  const { cartItems } = useContext(CartContext)
  if(cartItems.length == 0){
    return (
      <Cart />
    );

  } else{
    
    const noRepeatProducts = ({ product }, index) =>{
      return (<CartAddedItem product={product} key={product.product_id}/>)
    }

    return(
      <div className="Main_container">
            <section className="Main_container">
              
              {
                cartItems.map((product, index) =>(
                  
                  noRepeatProducts(product, index)
                  
                ))
              }
              
              
            </section>
      
            <div className="Terminar_pedido_container">
              <div className="Total">
                <hr className="hr_1" />
      
                <div className="Total_Precio">
                  <p className="Precio_total">Precio total:</p>
                  <p className="Precio_total_num">
                    $10.99
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