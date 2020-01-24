import produce from 'immer';
import { UserActionTypes } from './user.types';

const INITIALE_STATE = {
  currentUser: null
};

const userReducer = (state = INITIALE_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return produce(state, draftState => {
        draftState.currentUser = action.payload;
      });

    default:
      return state;
  }
};

export default userReducer;
