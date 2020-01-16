import React, { Component } from 'react';
import './sign-in.style.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ email: '', password: '' });
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { password, email } = this.state;

    return (
      <div className="sign-in">
        <h2>I already have an account.</h2>
        <span>sign in with your email and password.</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            label="Email"
            type="email"
            name="email"
            value={email}
            autoComplete="username"
            required
          />
          <FormInput
            handleChange={this.handleChange}
            label="Password"
            type="password"
            name="password"
            value={password}
            required
            autoComplete="off"
            // autoComplete="current-password" TODO
          />
          <div className="buttons">
            <CustomButton type="submit"> Sign In</CustomButton>
            <CustomButton isGoogleSignIn onClick={signInWithGoogle}>
              Sign In with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
