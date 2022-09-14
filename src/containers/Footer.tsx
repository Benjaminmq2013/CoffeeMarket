import React from 'react'
import Link from 'next/dist/client/link'

const Footer = () => {
  return (
    <footer className="Footer">        
        <div className="footer-wrapper">
            <Link href="tel:7729-7675">
              <a className="Footer-item" >Contacto: 7729-7675</a>
            </Link>
            <Link href="/">
              <a className="Footer-item">Acerca de nosotros</a>
            </Link>
            <a className="Footer-item" href="#">Preguntas Frecuentes</a>
            <a className="Footer-item" href="https://www.facebook.com/CoffeeMarket503/">Facebook</a>
            <a className="Footer-item" href="https://www.instagram.com/coffee_market_503/">Instagram</a>
            <a className="Footer-item" href="#"> 
                <img className="language_flag" src="/assets/Icons/footer/spain_flag.svg"/> 
                ES 
                <img className="drop-down-button" src="/assets/Icons/footer/drop-down.svg"/> 
            </a>
        </div>
    </footer>
  )
}

export default Footer