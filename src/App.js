import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.comonent';
import SignInAndSignUp from './pages/sign-in-and-sing-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null; //onAuthStateChanged return a fn, when it call it closes subscription

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.state;
    return (
      <div>
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
