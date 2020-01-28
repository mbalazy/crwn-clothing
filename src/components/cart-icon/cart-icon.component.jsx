import React from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { connect } from 'react-redux';
import { toogleCartView } from '../../redux/reducers/cart/cart.actions';

const CartIcon = ({ toogleCartView }) => (
  <div className="cart-icon" onClick={toogleCartView}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">2</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toogleCartView: () => dispatch(toogleCartView())
});

export default connect(null, mapDispatchToProps)(CartIcon);
