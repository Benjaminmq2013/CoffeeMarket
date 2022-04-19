import React, { useState } from 'react'
const axios = require("axios")

const usePostShoppingList = () => {
  

  axios.get('/payment/payout')
  .then(function (response) {
    return response.data
  })
  .catch(function (error) {
    console.log(error);
  })
  
}

export default usePostShoppingList