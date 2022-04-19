const express = require("express")
const router = express.Router();
const axios = require("axios")
const config = {
    params:{
        uid: "8c41704c487945ebd75d10cfed199d4b",
        wsk: "3ee3b69185e7936122aaa5355ed8cf85",
        format_return: "json",
    }
}

router.get("/payout", (req, res) =>{
  
    axios.get('https://sandbox.pagadito.com/comercios/wspg/charges.php', config)
  .then(function (response) {
    
    console.log(response);
  })
  .catch(function (error) {    
    console.log(error);
  })

    // res.send("Pago aceptado!")
})

module.exports = router;