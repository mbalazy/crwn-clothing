import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.style.scss';

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        <div className="cart-item">item1</div>
        <div className="cart-item">item2</div>
        <div className="cart-item">item3</div>
      </div>
      <CustomButton>go to checkout</CustomButton>
    </div>
  );
};

export default CartDropdown;
