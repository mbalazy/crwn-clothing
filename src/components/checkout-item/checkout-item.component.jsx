import React from 'react';
import './checkout-item.style.scss';

import { connect } from 'react-redux';
import { deleteItem } from '../../redux/reducers/cart/cart.actions';

const CheckoutItem = ({
  item: { id, name, imageUrl, price, quantity },
  deleteItem
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
      <div className="quantity">{quantity}</div>
      <span className="price">{price}</span>
      <button className="remove" onClick={() => deleteItem(id)}>
        &#10005;
      </button>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  deleteItem: id => dispatch(deleteItem(id))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
