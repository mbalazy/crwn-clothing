import React from 'react';
import {
  CollectionItemContainer,
  ImageContainer,
  CollectionFooterContainer,
  NameContainer,
  PriceContainer
} from './collection-item.style.jsx';
import CustomButton from '../../utils/custom-button/custom-button.component';

import { useDispatch } from 'react-redux';
import { addItem } from '../../../redux/reducers/cart/cart.actions';

const CollectionItem = ({ item, item: { price, name, imageUrl } }) => {
  const dispatch = useDispatch();
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
          dispatch(addItem(item));
        }}
      >
        add to cart
      </CustomButton>
    </CollectionItemContainer>
  );
};

export default CollectionItem;
