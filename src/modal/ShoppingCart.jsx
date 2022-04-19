import React, { useContext } from 'react'
import { AppContext } from '../context/productsContext'
import Modal from "react-modal"
import CheckoutCart from "../components/ProductCart/CheckoutCart"
import CartContainer from "../components/ProductCart/CartContainer"


const ShoppingCart = () => {
    const [ cartIsOpened , setCartIsOpened ] = useContext(AppContext)
   
    
    let customStyles = {
      inset: "0px",
    }
    
    return (
    <div className="">
      {/* <button onClick={() => setCartIsOpened(false)}>Open Cart</button> */}
      <Modal
        isOpen={!(!!cartIsOpened)}
        ariaHideApp={false}
        onRequestClose={() => setCartIsOpened(true)}
        style={ customStyles }
      >

        <div className='Nav_cart'>
          <img src="assets/Icons/back_button_orange.svg" alt="" />
          <a onClick={()=> setCartIsOpened(true)}>Volver al inicio</a>
        </div>

        <CheckoutCart />
        <CartContainer />
      </Modal>
    </div>
  );
}

export default ShoppingCart