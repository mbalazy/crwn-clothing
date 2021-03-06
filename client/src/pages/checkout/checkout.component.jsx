import React from 'react';
import './checkout.style.scss';

import CheckoutItem from '../../components/cart&checkout/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe/stripe-button/stripe-button.component';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectCartItems,
  selectCartTotal
} from '../../redux/reducers/cart/cart.selectors';

const CheckoutPage = ({ cartItems, cartTotal }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      <div className="checkout-products">
        {cartItems.map(item => (
          <CheckoutItem key={item.id} item={item} />
        ))}
      </div>
      <div className="total">
        TOTAL: ${cartTotal}
        <StripeCheckoutButton price={cartTotal} />
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
