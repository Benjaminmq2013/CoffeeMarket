import React, { useState } from 'react'
const axios = require("axios")

const Checkout_button = () => {
  const [paymentResponse, setPaymentResponse] = useState([])
  
  const postShoppingList = () => {

    axios.get('/payment/payout')
    .then(function (response) {
      console.log(response.data)
     setPaymentResponse(response.data)
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