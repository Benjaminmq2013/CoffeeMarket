import React from 'react'
import Link from 'next/link';

const NavButtons = () => {
  return (
    <div className="NavButtons_container">
      <Link href="/">
        <a className="navButton">        
          <img className="home_icon" src="/assets/Icons/navbar/home.svg" alt="" /> Inicio
        </a>
      </Link>
      <a className="navButton" href="#">
        <img className="account_icon" src="/assets/Icons/navbar/user.svg" alt="" /> Mi cuenta
      </a>
      <a className="navButton" href="#">
        <img className="shipping_icon" src="/assets/Icons/navbar/truck_shipping.svg" alt="" /> Mis ordenes
      </a>
      <a className="navButton" href="#">
        <img className="phone_icon" src="/assets/Icons/navbar/phone.svg" alt="" /> Llamar
      </a>
      <Link href="/login">
        <a className="navButton">
          <img className="logout_icon" src="/assets/Icons/navbar/logout.svg" alt="" /> Iniciar Sesión
        </a>
      </Link>
      
    </div>
  );
};

export default NavButtons