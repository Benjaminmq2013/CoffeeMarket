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

let xmls ='<soapenv:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:wspg">\
  <soapenv:Header/>\
  <soapenv:Body>\
    <urn:connect soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">\
        <uid xsi:type="xsd:string">8c41704c487945ebd75d10cfed199d4b</uid>\
        <wsk xsi:type="xsd:string">3ee3b69185e7936122aaa5355ed8cf85</wsk>\
        <format_return xsi:type="xsd:string">json</format_return>\
      </urn:connect>\
   </soapenv:Body>\
</soapenv:Envelope>'

router.get("/payout", (req, res) =>{
  
  axios
    .post('https://sandbox.pagadito.com:443/comercios/wspg/charges.php', xmls,{
      headers: { "Content-Type": "text/xml" },
    })
    .then(function (response) {
      
      console.log(response);
    })
    .catch(function (error) {    
      console.log(error);
    })

    // res.send("Pago aceptado!")
})

module.exports = router;