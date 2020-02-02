import React from 'react';
import './checkout-item.style.scss';

import { connect } from 'react-redux';
import {
  deleteItem,
  addItem,
  removeItem
} from '../../redux/reducers/cart/cart.actions';

const CheckoutItem = ({
  item: { name, imageUrl, price, quantity },
  item,
  deleteItem,
  addItem,
  removeItem
}) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <div
          className="image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      </div>
      <span className="name">{name}</span>
      <div className="quantity">
        <button className="arrow" onClick={() => removeItem(item)}>
          &#10094;
        </button>
        <div className="valu">{quantity}</div>
        <button className="arrow" onClick={() => addItem(item)}>
          &#10095;
        </button>
      </div>
      <span className="price">${price}</span>
      <button className="remove" onClick={() => deleteItem(item)}>
        &#10005;
      </button>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  deleteItem: item => dispatch(deleteItem(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
