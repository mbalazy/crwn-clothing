import React, { Component } from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.comonent';
import SignInAndSignUp from './pages/sign-in-and-sing-up/sign-in-and-sign-up.component';

class App extends Component {
  unsubscribeFromAuth = null; //onAuthStateChanged return a fn, when it call it closes subscription; unsubscribeFromAuth used in componentWillUnmount

  componentDidMount() {
    const { setCurrentUser } = this.props; //from redux

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userDocRef = await createUserProfileDocument(userAuth);

        userDocRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      } else {
        this.setState({ currentUser: null });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)) //dispatch pass object to every reducer
});

export default connect(null, mapDispatchToProps)(App); //first null bc we dont need currentUser in this component from rreducer, it only set it in state, dont use it in component in render()
