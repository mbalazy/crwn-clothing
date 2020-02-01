import { CartActionTypes } from './cart.types';

export const toogleCartView = () => ({
  type: CartActionTypes.TOOGLE_CART_DROPDOWN
});

export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});