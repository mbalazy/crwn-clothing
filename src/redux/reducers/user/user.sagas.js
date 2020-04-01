import { takeLatest, call, put, all } from 'redux-saga/effects';

import UserActionTypes from './user.types';

import {
  signInSucces,
  signInFailure,
  signOutSucces,
  signOutFailure,
  signUpSucces,
  signUpFailure
} from './user.actions';

import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUserFromSession
} from '../../../firebase/firebase.utils';

function* getSnapshotFromUserAuth(userAuth) {
  try {
    const userDocRef = yield call(createUserProfileDocument, userAuth);
    const userSnapshot = yield userDocRef.get();
    yield put(signInSucces({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (err) {
    yield put(signInFailure(err));
  }
}

function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (err) {
    yield put(signInFailure(err));
  }
}

function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (err) {
    yield put(signInFailure(err));
  }
}

function* isUserAuthenticated() {
  try {
    const user = yield getCurrentUserFromSession();
    if (!user) return;
    yield getSnapshotFromUserAuth(user);
  } catch (err) {
    yield put(signInFailure(err));
  }
}

function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSucces());
  } catch (err) {
    signOutFailure(err);
  }
}

function* signUp({
  payload: { displayName, email, password, confirmPassword }
}) {
  if (password !== confirmPassword) {
    yield put(signUpFailure({ message: `Passwords don't match` }));
    return;
  }

  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield createUserProfileDocument(user, { displayName });
    yield put(signUpSucces({ user }));
  } catch (err) {
    put(signUpFailure(err));
  }
}

function* signInAfterSignUp({ payload: { user } }) {
  yield getSnapshotFromUserAuth(user);
}

function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

function* onSignUpStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

function* onSignUpSucces() {
  yield takeLatest(UserActionTypes.SIGN_UP_SUCCES, signInAfterSignUp);
}

function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignUpSucces)
  ]);
}

export default userSagas;
