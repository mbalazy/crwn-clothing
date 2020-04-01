import React from 'react';
import { CartItemContainer } from './cart-item.style.jsx';

import { connect } from 'react-redux';
import { addItem, removeItem } from '../../../redux/reducers/cart/cart.actions';

const CartItem = ({
  item: { name, price, imageUrl, quantity },
  item,
  addItem,
  removeItem
}) => {
  return (
    <CartItemContainer>
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="details">
        <span className="item-name">{name}</span>
        <span className="item-price">
          {quantity} X ${price}
        </span>
        <div className="arrows">
          <button className="arrow" onClick={() => removeItem(item)}>
            &#10094;
          </button>
          <button className="arrow" onClick={() => addItem(item)}>
            &#10095;
          </button>
        </div>
      </div>
    </CartItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CartItem);
