import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const apiKey = 'pk_test_N4cbTsJbxZJhMWhzJWMnzeS400R2HHwMhV';
  const onToken = token => {
    console.log(token);
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={apiKey}
    />
  );
};

export default StripeCheckoutButton;
