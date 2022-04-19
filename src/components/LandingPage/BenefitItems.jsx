import React from 'react'

const BenefitItems = () => {
  return (
    <div className="BenefitItems">
        <ul>
            <li className="benefit_item">
                <img className="benefit_check-icon" src="/assets/Icons/landing/benefit_check.svg" alt="" />
                Envíos hasta tu casa.
            </li>
            <li className="benefit_item">
                <img className="benefit_check-icon" src="/assets/Icons/landing/benefit_check.svg" alt="" />
                Entérate y disfruta de los últimos descuentos.
            </li>
            <li className="benefit_item">
                <img className="benefit_check-icon" src="/assets/Icons/landing/benefit_check.svg" alt="" />
                Conoce los tipos de cafés que se producen en
                El Salvador.
            </li>
            <li className="benefit_item">
                <img className="benefit_check-icon" src="/assets/Icons/landing/benefit_check.svg" alt="" />
                Soporte e información del estado de tu pedido.
            </li>
            <li className="benefit_item">
                <img className="benefit_check-icon" src="/assets/Icons/landing/benefit_check.svg" alt="" />
                Pagos rápidos Online con la plataforma pagadito.
            </li>
        </ul>
        
    </div>
  )
}

export default BenefitItems