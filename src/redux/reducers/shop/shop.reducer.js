import { ShopActionTypes } from './shop.types';
import produce from 'immer';

const INITIALE_STATE = {
  collections: {}
};

const shopReducer = (state = INITIALE_STATE, action) => {
  return produce(state, draftState => {
    switch (action.type) {
      case ShopActionTypes.UPDATE_COLLECTIONS:
        draftState.collections = action.payload;
        break;

      default:
        return state;
    }
  });
};

export default shopReducer;
