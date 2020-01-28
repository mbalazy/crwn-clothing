import { CartActionTypes } from './cart.types';

const INITIALE_STATE = {
  isCartDropdownVisible: false
};

const cartReducer = (state = INITIALE_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOOGLE_CART_DROPDOWN:
      return {
        ...state,
        isCartDropdownVisible: !state.isCartDropdownVisible
      };

    default:
      return state;
  }
};

export default cartReducer;
