import React from 'react';
import './sign-in-and-sign-up.style.scss';

import SignIn from '../../components/signing/sign-in/sign-in.component';
import SignUp from '../../components/signing/sign-up/sign-up.component';

const SignInAndSignUp = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUp;
