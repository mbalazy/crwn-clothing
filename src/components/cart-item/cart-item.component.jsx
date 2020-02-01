import React from 'react';
import './cart-item.style.scss';

const CartItem = ({ item: { name, price, imageUrl, quantity } }) => {
  return (
    <div className="cart-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="details">
        <span className="item-name">{name}</span>
        <span className="item-price">
          {quantity} X ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
