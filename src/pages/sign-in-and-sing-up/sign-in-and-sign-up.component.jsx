import React from 'react';
import './sign-in-and-sign-up.style.scss';

import SignIn from '../../components/signing/sign-in/sign-in.component';
import SignUp from '../../components/signing/sign-up/sign-up.component';

import { useSelector } from 'react-redux';
import {
  selectIsUserFetching,
  selectUserError
} from '../../redux/reducers/user/user.selectors';

const SignInAndSignUp = () => {
  const isUserDataFetching = useSelector(selectIsUserFetching);
  const userLoginError = useSelector(selectUserError);

  return (
    <main>
      {isUserDataFetching ? (
        <h2 className="loading-user">Loading User...</h2>
      ) : (
        <div>
          {userLoginError ? (
            <h2 className="login-error">{userLoginError.message}</h2>
          ) : null}
          <div className="sign-in-and-sign-up">
            <SignIn />
            <SignUp />
          </div>
        </div>
      )}
    </main>
  );
};

export default SignInAndSignUp;
