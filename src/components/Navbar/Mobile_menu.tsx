import React,{ useContext } from 'react'
import { AppContext } from '../../context/checkout/productsContext';

const Mobile_menu = () => {
  const { cartIsOpened , setCartIsOpened } = useContext(AppContext)

  return (
    <>
      <div>
        <ul id="slide-out" className="sidenav menu_movil">

          <section className='container'>

            <div className='image_menu'>
              <img src="assets/Images/logo.png" alt=""/>
            </div>

            <div className='items_menu'>

              <span className='items_menu_icons'>
                <img src="assets/Icons/navbar/home.svg"  alt="" />
                <img src="assets/Icons/navbar/store.svg" alt="" />
                <img src="assets/Icons/navbar/star.svg" alt="" />
                <img src="assets/Icons/shopping_cart.svg" alt="" />
                <img src="assets/Icons/icons-menu/llamar.svg" alt="" />

              </span>
              <span className='items_menu_text'>

                <a href="#aboutU">Inicio</a>
                <a href="#store">Catálogo</a>
                <a href="#recomendations">Recomendaciones</a>
                <a onClick={()=> setCartIsOpened(false)}>Carrito</a>
                <a href="#contactUs">Contacto</a>

              </span>

            </div>

            <div className='footer_menu_container'>

              <div className='footer_menu'>

              <span className='icons_footer'>

                <img className='languaje_icon' src="assets/Icons/icons-menu/idioma.svg" alt=""/>

              </span>

              <span className='languaje_text'>ES</span>

              <label className="switch">

                  <input type="checkbox"/>
                  <span className="slider round">
                  </span>

              </label>

              </div>

            </div>

          </section>




        </ul>
      </div>
    </>
  );
};

export default Mobile_menu