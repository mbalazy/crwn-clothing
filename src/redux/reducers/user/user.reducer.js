import produce from 'immer';
import { UserActionTypes } from './user.types';

const INITIALE_STATE = {
  currentUser: null
};

const userReducer = (state = INITIALE_STATE, action) => {
  return produce(state, draftState => {
    switch (action.type) {
      case UserActionTypes.SET_CURRENT_USER:
        draftState.currentUser = action.payload;
        break;

      default:
        return state;
    }
  });
};

export default userReducer;
