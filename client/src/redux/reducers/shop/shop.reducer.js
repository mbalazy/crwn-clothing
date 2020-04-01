import ShopActionTypes from './shop.types';
import produce from 'immer';

const INITIALE_STATE = {
  collections: {},
  isFetching: true,
  errMessage: null
};

const shopReducer = (state = INITIALE_STATE, action) => {
  return produce(state, draftState => {
    switch (action.type) {
      case ShopActionTypes.FETCH_COLLECTION_START:
        draftState.isFetching = true;
        break;

      case ShopActionTypes.FETCH_COLLECTION_SUCCES:
        draftState.isFetching = false;
        draftState.collections = action.payload;
        break;

      case ShopActionTypes.FETCH_COLLECTION_FAILURE:
        draftState.isFetching = false;
        draftState.errMessage = action.payload;
        break;

      default:
        return state;
    }
  });
};

export default shopReducer;
