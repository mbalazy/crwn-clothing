import React from 'react';
import './sign-in-and-sign-up.style.scss';
import { connect } from 'react-redux';
import { setCurrentUser } from '../../redux/reducers/user/user.actions';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import { withRouter } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';

const SignInAndSignUp = ({ currentUser, history, setCurrentUser }) => {
  if (currentUser) {
    return (
      <div className="sign-in-and-sign-up user-signed-in">
        <h2>Hello {currentUser.displayName}! You are signed in.</h2>
        <div className="user-signed-in-buttons">
          <CustomButton onClick={() => history.push('/')}>
            HOMEPAGE
          </CustomButton>
          <CustomButton
            onClick={() => {
              auth.signOut();
              setCurrentUser(null);
            }}
            style={{ background: '#fff', color: '#000' }}
          >
            SIGN OUT
          </CustomButton>
        </div>
      </div>
    );
  } else {
    return (
      <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
      </div>
    );
  }
};

const mapStateToProps = state => ({ currentUser: state.user.currentUser });

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SignInAndSignUp)
);
