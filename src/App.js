import React, { useEffect } from 'react';

import GlobalStyle from './theme/globalStyles.js';
import { Route, Switch, Redirect } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { selectCurrentUser } from './redux/reducers/user/user.selectors';
import { checkUserSession } from './redux/reducers/user/user.actions';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.comonent';
import CheckoutPage from './pages/checkout/checkout.component';
import SignInAndSignUp from './pages/sign-in-and-sing-up/sign-in-and-sign-up.component';

const App = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
          }
        />
      </Switch>
    </>
  );
};

export default App;
