import React from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { connect } from 'react-redux';
import { toogleCartView } from '../../redux/reducers/cart/cart.actions';

import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount } from '../../redux/reducers/cart/cart.selectors';

const CartIcon = ({ toogleCartView, numberOfItemsInCart }) => (
  <div className="cart-icon" onClick={toogleCartView}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{numberOfItemsInCart}</span>
  </div>
);

const mapStateToProps = createStructuredSelector({
  numberOfItemsInCart: selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
  toogleCartView: () => dispatch(toogleCartView())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
