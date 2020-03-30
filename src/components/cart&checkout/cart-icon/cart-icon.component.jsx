import React from 'react';
import { CartIconContainer } from './cart-icon.style.jsx';
import { ReactComponent as ShoppingIcon } from '../../../assets/shopping-bag.svg';

import { useSelector, useDispatch } from 'react-redux';
import { toogleCartView } from '../../../redux/reducers/cart/cart.actions';

import { selectCartItemsCount } from '../../../redux/reducers/cart/cart.selectors';

const CartIcon = () => {
  const dispatch = useDispatch();
  const numberOfItemsInCart = useSelector(selectCartItemsCount);
  return (
    <CartIconContainer onClick={() => dispatch(toogleCartView())}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{numberOfItemsInCart}</span>
    </CartIconContainer>
  );
};

export default CartIcon;
