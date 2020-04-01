import React from 'react';
import './sign-in-and-sign-up.style.scss';

import SignIn from '../../components/signing/sign-in/sign-in.component';
import SignUp from '../../components/signing/sign-up/sign-up.component';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectIsUserFetching,
  selectUserError
} from '../../redux/reducers/user/user.selectors';

const SignInAndSignUp = ({ isUserDataFetching, userLoginError }) => {
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

const mapStateToProps = createStructuredSelector({
  isUserDataFetching: selectIsUserFetching,
  userLoginError: selectUserError
});

export default connect(mapStateToProps)(SignInAndSignUp);
