import React from 'react';
import { CartIconContainer } from './cart-icon.style.jsx';
import { ReactComponent as ShoppingIcon } from '../../../assets/shopping-bag.svg';

import { connect } from 'react-redux';
import { toogleCartView } from '../../../redux/reducers/cart/cart.actions';

import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount } from '../../../redux/reducers/cart/cart.selectors';

const CartIcon = ({ numberOfItemsInCart, dispatch }) => (
  <CartIconContainer onClick={() => dispatch(toogleCartView())}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{numberOfItemsInCart}</span>
  </CartIconContainer>
);

const mapStateToProps = createStructuredSelector({
  numberOfItemsInCart: selectCartItemsCount
});

export default connect(mapStateToProps)(CartIcon);
