import Checkout_summary from "../containers/checkout/Checkout_summary";
import Checkout_method from "../containers/checkout/Checkout_method";
import Checkout_card from "../containers/checkout/Checkout_card";
import React from 'react'
import Checkout_button from "../containers/checkout/Checkout_button";
import Navbar from "../containers/Navbar"

const Checkout = () => {
  return (
    <div>
      <Navbar />
      <div className="container_responsive_web-checkout">
        <div className="responsive_checkout-summary">
          <Checkout_summary />
        </div>

        <div className="responsive_checkout">
          <Checkout_method />
          <Checkout_card />
          <Checkout_button />
        </div>
      </div>
    </div>
  );
};

export default Checkout