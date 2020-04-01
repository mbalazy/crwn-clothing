import produce from 'immer';
import UserActionTypes from './user.types';

const INITIALE_STATE = {
  currentUser: null,
  isFetching: false,
  error: null
};

const userReducer = (state = INITIALE_STATE, action) => {
  return produce(state, draftState => {
    switch (action.type) {
      case UserActionTypes.GOOGLE_SIGN_IN_START:
      case UserActionTypes.EMAIL_SIGN_IN_START:
      case UserActionTypes.SIGN_OUT_START:
        draftState.isFetching = true;
        break;

      case UserActionTypes.SIGN_IN_SUCCES:
        draftState.currentUser = action.payload;
        draftState.isFetching = false;
        draftState.error = null;
        break;

      case UserActionTypes.SIGN_IN_FAILURE:
      case UserActionTypes.SIGN_OUT_FAILURE:
        draftState.error = action.payload;
        draftState.isFetching = false;
        break;

      case UserActionTypes.SIGN_UP_FAILURE:
        draftState.error = action.payload;
        break;

      case UserActionTypes.SIGN_OUT_SUCCES:
        draftState.currentUser = null;
        draftState.isFetching = false;
        draftState.error = null;
        break;

      default:
        return state;
    }
  });
};

export default userReducer;
