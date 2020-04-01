import React from 'react';
import {
  CollectionItemContainer,
  ImageContainer,
  CollectionFooterContainer,
  NameContainer,
  PriceContainer
} from './collection-item.style.jsx';
import CustomButton from '../../utils/custom-button/custom-button.component';

import { connect } from 'react-redux';
import { addItem } from '../../../redux/reducers/cart/cart.actions';

const CollectionItem = ({ item, item: { price, name, imageUrl }, addItem }) => {
  return (
    <CollectionItemContainer>
      <ImageContainer image={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>${price}</PriceContainer>
      </CollectionFooterContainer>
      <CustomButton
        inverted
        onClick={() => {
          addItem(item);
        }}
      >
        add to cart
      </CustomButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
