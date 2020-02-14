import React from 'react';
import './cart-dropdown.style.scss';
import CustomButton from '../../utils/custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../../redux/reducers/cart/cart.selectors';
import { toogleCartView } from '../../../redux/reducers/cart/cart.actions';

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map(item => <CartItem key={item.id} item={item} />)
      ) : (
        <h2 className="empty-cart">Your cart is empty</h2>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push('/checkout');
        dispatch(toogleCartView());
      }}
    >
      go to checkout
    </CustomButton>
    <CustomButton inverted onClick={() => dispatch(toogleCartView())}>
      close cart
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
