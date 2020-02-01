import React from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { connect } from 'react-redux';
import { toogleCartView } from '../../redux/reducers/cart/cart.actions';

const CartIcon = ({ toogleCartView, numberOfItemsInCart }) => (
  <div className="cart-icon" onClick={toogleCartView}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{numberOfItemsInCart}</span>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  numberOfItemsInCart: cartItems.reduce((previous, current) => {
    return previous + current.quantity;
  }, 0)
});

const mapDispatchToProps = dispatch => ({
  toogleCartView: () => dispatch(toogleCartView())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
