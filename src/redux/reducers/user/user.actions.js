import UserActionTypes from './user.types';

// EMAIL AND PASSWORD SIGN IN

export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START
});

export const emailSignInStart = emailAndPassword => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword
});

export const signInSucces = user => ({
  type: UserActionTypes.SIGN_IN_SUCCES,
  payload: user
});

export const signInFailure = error => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error
});

// SIGN UP

export const signUpStart = credentials => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: credentials
});

export const signUpSucces = user => ({
  type: UserActionTypes.SIGN_UP_SUCCES,
  payload: user
});

export const signUpFailure = error => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
  payload: error
});

// SIGN OUT

export const signOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START
});

export const signOutSucces = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCES
});

export const signOutFailure = error => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload: error
});

// CHECK SESSION

export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION
});
