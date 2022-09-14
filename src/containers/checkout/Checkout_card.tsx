import React from 'react'

const Checkout_card = () => {
  return (
    <div>

        <div className='container_checkout_card'>

            <div className='checkout_card_tittle'>
                <p>CARD DETAILS</p>
            </div>

            <div className='checkout_card_details'>

                <div className='card_numbers'>
                <label className='label_card-details' htmlFor="">Card Number</label>
                <p className='description_card-details'>The digits on the front of your card</p>
                <input type="number" placeholder='2345-1234-1234-1235' />
                </div>

                <div className='card_holder-name'>
                <label className='label_card-details' htmlFor="">Card Holder Name</label>
                <p className='description_card-details'>The name on the front of your card</p>
                <input type="text" placeholder='AHMAD SALEM' />
                </div>

                <div className='expiration_date-card'>

                <div className='expiration_date'>
                <label className='label_card-details' htmlFor="">Expiration date</label>
                <p className='description_card-details'>The dates your credit card expires</p>
                <input type="text" className='button_fecha1' placeholder='Dec'/>
                < input type="text" className='button_fecha2' placeholder='2021'/>
                </div>

                <div className='cvv_numbers'>
                  <label className='label_card-details' htmlFor="">CVV</label>
                  <p className='description_card-details'>Find this on the back of your card</p>
                  <input className='input_cvv-numbers' type="text" placeholder='123' maxLength={3} />
                </div>

            </div>


            </div>
        
        </div>

    </div>
  )
}

export default Checkout_card