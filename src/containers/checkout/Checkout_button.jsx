import React, { useState } from 'react'
import { xmlParser } from '../../helpers/xml-Parser'
const axios = require("axios")

const Checkout_button = () => {
  const [paymentResponse, setPaymentResponse] = useState([])
  
  const postShoppingList = () => {

    axios.get('/payment/payout')
    .then(function (response) {
      //setPaymentResponse(response.data)
      console.log(xmlParser(response.data))

    })
    .catch(function (error) {
      console.log(error);
    })
    
  }

  return (
    <div>
        <div className='container_checkout_button-enviar'>
            <button 
              className='finalizar_pagar_checkout'
              onClick={() => postShoppingList()}
              >Finalizar y pagar
            </button>
        </div>
    </div>
  )
}

export default Checkout_button