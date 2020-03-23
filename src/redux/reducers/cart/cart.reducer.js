import CartActionTypes from './cart.types';
import produce from 'immer';
import {
  addItemToCart,
  removeItemFromCart,
  deleteItemFromCart
} from './cart.utils';

const INITIALE_STATE = {
  isCartDropdownVisible: false,
  cartItems: []
};

const cartReducer = (state = INITIALE_STATE, action) => {
  return produce(state, draftState => {
    switch (action.type) {
      case CartActionTypes.TOOGLE_CART_DROPDOWN:
        draftState.isCartDropdownVisible = !draftState.isCartDropdownVisible;
        break;

      case CartActionTypes.ADD_ITEM:
        addItemToCart(draftState.cartItems, action.payload);
        break;

      case CartActionTypes.REMOVE_ITEM:
        draftState.cartItems = removeItemFromCart(
          draftState.cartItems,
          action.payload
        );
        break;

      case CartActionTypes.DELETE_ITEM:
        draftState.cartItems = deleteItemFromCart(
          draftState.cartItems,
          action.payload
        );
        break;

      case CartActionTypes.CLEAR_CART:
        draftState.cartItems = [];
        break;

      default:
        return state;
    }
  });
};

export default cartReducer;
