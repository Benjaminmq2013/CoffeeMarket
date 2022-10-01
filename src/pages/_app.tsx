import '../styles/globals.css'
import "../styles/Navbar.css"
import "../styles/Hero.css"
import "../styles/Products.css"
import "../styles/Footer.css"

import "../styles/LandingNavbar.css"
import "../styles/LandingRecomendations.css"
import "../styles/LandingBenefits.css"
import "../styles/LandingComments.css"
import "../styles/LandingContactUs.css"

import "../styles/ProductDetails.css"
import "../styles/ProductItemDetails.css"

import "../styles/LoginForm.css"

import "../styles/menu.css"
import "../styles/menu-movil.css"

import "../styles/CartButton.css"
import "../styles/CartContainer.css"

import 'swiper/css/bundle';
import "../styles/Swiper Styles.css"


import "../styles/Landing_store.css"

import "../styles/ProductStars.css"
import "../styles/LandingContactForm.css"
import "../styles/EditProfile.css"
import "../styles/EditName.css"
import "../styles/EditAddress.css"
import "../styles/Users.css/NavUsers.css"
import "../styles/Users.css/User1.css"
import "../styles/EmptyCart.css"

import "../styles/Checkout/Checkout_summary.css"
import "../styles/Checkout/Checkout_method.css"
import "../styles/Checkout/Checkout_card.css"


// import "../styles/Shippingdata.css"
// import "../styles/Personaldata.css"
// import "../styles/Comprarealizada.css"


import "../styles/administrar.css"
import "../styles/menuadministracion.css"
import "../styles/componentUI.css"





import Provider from "../context/checkout/productsContext"
import CartState from "../context/cart/CartState"




function MyApp({ Component, pageProps }) {

  
  return (
    <Provider>
      <CartState>
        <Component {...pageProps} />
      </CartState>
    </Provider>

  )
}

export default MyApp
