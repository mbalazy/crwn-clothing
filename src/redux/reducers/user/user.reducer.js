import produce from 'immer';

const INITIALE_STATE = {
  currentUser: null
};

const userReducer = (state = INITIALE_STATE, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return produce(state, draftState => {
        draftState.currentUser = action.payload;
      });

    default:
      return state;
  }
};

export default userReducer;
