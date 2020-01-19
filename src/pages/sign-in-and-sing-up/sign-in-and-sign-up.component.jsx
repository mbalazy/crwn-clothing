import React from 'react';

import './sign-in-and-sign-up.style.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInAndSignUp = ({ currentUser }) => {
  return currentUser ? (
    <div className="sign-in-and-sign-up user-signed-in">
      Hello {currentUser.displayName}! You are signed in.
    </div>
  ) : (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUp;
