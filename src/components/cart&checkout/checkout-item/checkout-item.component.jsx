import React from 'react';
import {
  CheckoutItemContainer,
  ImageContainer
} from './checkout-item.style.jsx';

import { useDispatch } from 'react-redux';
import {
  deleteItem,
  addItem,
  removeItem
} from '../../../redux/reducers/cart/cart.actions';

const CheckoutItem = ({ item: { name, imageUrl, price, quantity }, item }) => {
  const dispatch = useDispatch();
  return (
    <CheckoutItemContainer>
      <ImageContainer image={imageUrl} />
      <span className="name">{name}</span>
      <div className="quantity">
        <button className="arrow" onClick={() => dispatch(removeItem(item))}>
          &#10094;
        </button>
        <div className="valu">{quantity}</div>
        <button className="arrow" onClick={() => dispatch(addItem(item))}>
          &#10095;
        </button>
      </div>
      <span className="price">${price}</span>
      <button className="remove" onClick={() => dispatch(deleteItem(item))}>
        &#10005;
      </button>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
