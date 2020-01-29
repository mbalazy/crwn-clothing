import React from 'react';
import './cart-item.style.scss';

const CartItem = ({ name, price, imageUrl }) => {
  return (
    <div className="cart-item">
      <h3 className="item-name">{name}</h3>
      <h4 className="item-price">{price}$</h4>
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
    </div>
  );
};

export default CartItem;
