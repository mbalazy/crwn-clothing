import React from 'react';
import { CartDropdownContainer } from './cart-dropdown.style.jsx';

import CustomButton from '../../utils/custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import { withRouter } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { selectCartItems } from '../../../redux/reducers/cart/cart.selectors';
import { toogleCartView } from '../../../redux/reducers/cart/cart.actions';

const CartDropdown = ({ history }) => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  return (
    <CartDropdownContainer>
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
      <CustomButton
        inverted
        onClick={() => {
          dispatch(toogleCartView());
        }}
      >
        close cart
      </CustomButton>
    </CartDropdownContainer>
  );
};

export default withRouter(CartDropdown);
