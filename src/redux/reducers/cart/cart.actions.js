import CartActionTypes from './cart.types';

export const toogleCartView = () => ({
  type: CartActionTypes.TOOGLE_CART_DROPDOWN
});

export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});

export const removeItem = item => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item
});

export const deleteItem = item => ({
  type: CartActionTypes.DELETE_ITEM,
  payload: item
});

export const clearCart = () => ({
  type: CartActionTypes.CLEAR_CART
});
