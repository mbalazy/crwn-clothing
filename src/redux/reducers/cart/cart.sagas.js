import { takeLatest, call, put, all } from 'redux-saga/effects';

import UserActionTypes from '../user/user.types';

import { clearCart } from './cart.actions';

function* clearCartOnSignOut() {
  yield put(clearCart());
}

function* onSignOutSucces() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCES, clearCartOnSignOut);
}

function* cartSagas() {
  yield all([call(onSignOutSucces)]);
}

export default cartSagas;
