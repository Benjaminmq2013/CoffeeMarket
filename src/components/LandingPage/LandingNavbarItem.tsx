import React,{ useContext } from 'react'
import { AppContext } from '../../context/checkout/productsContext';
import ShoppingCart from '../../modal/ShoppingCart';
import CartContext from '../../context/cart/CartContext';

const LandingNavbarItem = () => {
  const { cartIsOpened , setCartIsOpened } = useContext(AppContext)
  const { state, dispatch } = useContext(CartContext)

  const addProductsNotification = () =>{
    if (state.length >= 1){
      return <div className="cartNotification">{state.length}</div>
    }
  }
  
  return (
    <>
      <ShoppingCart />
        <a className="LandingNavbarButton"  href="#">
          <img
            className="LandingNavbarLogo "
            src="assets/Images/logo.png"
            alt=""
          />
        </a>

      <a className="LandingNavbarButton " href="#aboutUs">
        <img
          className="landing-navbar-icon nav-landing-home"
          src="assets/Icons/navbar/home.svg"
          alt=""
        />
        Inicio
      </a>

      <a className="LandingNavbarButton" href="#store">
        <img
          className="landing-navbar-icon nav-landing-store"
          src="assets/Icons/navbar/store.svg"
          alt=""
        />
        Catálogo
      </a>

      <a className="LandingNavbarButton" href="#recomendations">
        <img
          className="landing-navbar-icon nav-landing-star"
          src="assets/Icons/navbar/star.svg"
          alt=""
        />
        Recomendaciones
      </a>

      <a className="LandingNavbarButton nav_cart-button"
        onClick={()=> {
          setCartIsOpened(false)
          console.log(cartIsOpened)
        }}
      >
        {addProductsNotification()}
        <img
          className="landing-navbar-icon nav-landing-cart"
          src="assets/Icons/shopping_cart.svg"
          alt=""
        />
        Carrito
      </a>

      <a className="LandingNavbarButton" href="#contactUs">
        <img
          className="landing-navbar-icon nav-landing-phone"
          src="assets/Icons/icons-menu/llamar.svg"
          alt=""
        />
        Contácto
      </a>

      <a href="">
        <img
          className="nav_landing-logo"
          src="/assets/Images/logo.png"
          alt=""
        />
      </a>
    </>
  );
}






export default LandingNavbarItem