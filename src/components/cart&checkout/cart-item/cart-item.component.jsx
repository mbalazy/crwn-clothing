import React from 'react';
import { CartItemContainer } from './cart-item.style.jsx';

import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../../../redux/reducers/cart/cart.actions';

const CartItem = ({ item: { name, price, imageUrl, quantity }, item }) => {
  const dispatch = useDispatch();

  return (
    <CartItemContainer>
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="details">
        <span className="item-name">{name}</span>
        <span className="item-price">
          {quantity} X ${price}
        </span>
        <div className="arrows">
          <button className="arrow" onClick={() => dispatch(removeItem(item))}>
            &#10094;
          </button>
          <button className="arrow" onClick={() => dispatch(addItem(item))}>
            &#10095;
          </button>
        </div>
      </div>
    </CartItemContainer>
  );
};

export default CartItem;
