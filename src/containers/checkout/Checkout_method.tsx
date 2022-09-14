import React from 'react'

const Checkout_method = () => {
  return (
    <div>
        <div className='container_checkout_method'>

            <div className='checkout_method_tittle'>
                <p className='tittle_pago-p'>Seleccione tu método de pago</p>
            </div>

            <div className='container_metodos-pagos'>
                
            <div className='checkout_method_credit-card'>
                
                <button className='button_credit_card'><img src="/assets/Icons/card.svg" alt="" /> Tarjeta de crédito o débito</button>
            </div>

            <div className='checkout_method_money'>
               
                <button className='button_pago-efectivo'><img src="/assets/Icons/money.svg" alt="" />En efectivo</button>
            
            </div>
            
            </div>

            <div className='checkout_method_description'>
                <p className='description-p'>Al ingresar tu tarjeta abajo, se te cobrara el total mostrado en el resumen de la compra</p>
            </div>

        </div>
        
    </div>

  )
}

export default Checkout_method