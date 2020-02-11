import React from 'react';
import './collection-item.style.scss';
import CustomButton from '../custom-button/custom-button.component';

import { connect } from 'react-redux';
import { addItem } from '../../redux/reducers/cart/cart.actions';

const CollectionItem = ({ item, item: { price, name, imageUrl }, addItem }) => {
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton
        inverted
        onClick={() => {
          addItem(item);
        }}
      >
        add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
