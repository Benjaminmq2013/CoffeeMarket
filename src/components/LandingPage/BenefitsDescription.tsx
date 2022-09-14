import React from 'react'
import Link from 'next/link'

const BenefitsDescription = () => {
  return (
    <div className="benefits_wrapper">
        <h2 className="Benefits_title">Beneficios:</h2>
        <h4 className="benefits_subtitle">Ordena ahora y obtén: </h4>
        <p className="benefits_description-p">Descripción de los beneficios al ordenar con nosotros.
            Este es un espacio para convencer al cliente de lo
            beneficioso que resulta escoger nuestro servicio 
            y conseguir que tome la decisión de visitar el catálogo
            o hacer una llamada y convertir a ese visitante en cliente.
        </p>
        <Link href="/store">
          <a className="benefits_button" >Obtén los beneficios</a>
        </Link>
    </div>
  )
}

export default BenefitsDescription