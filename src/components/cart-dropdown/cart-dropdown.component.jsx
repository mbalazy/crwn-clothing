import React from 'react';
import './cart-dropdown.style.scss';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import { connect } from 'react-redux';

const CartDropdown = ({ cartItems }) => (
  <div>
    {cartItems.length ? (
      <div className="cart-dropdown">
        <div className="cart-items">
          {cartItems.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <CustomButton>go to checkout</CustomButton>
      </div>
    ) : (
      <div className="cart-dropdown">
        <h2 className="empty-cart">Your cart is empty</h2>
      </div>
    )}
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({ cartItems });

export default connect(mapStateToProps)(CartDropdown);
