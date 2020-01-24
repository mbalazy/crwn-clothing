import React from 'react';
import './header.style.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import { connect } from 'react-redux';
import { setCurrentUser } from '../../redux/reducers/user/user.actions';

import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser, logOutUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>

    {currentUser ? (
      <div className="hello-user">HELLO {currentUser.displayName}</div>
    ) : null}

    <div className="options">
      <Link className="option" to="/">
        HOMEPAGE
      </Link>
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      {currentUser ? (
        <div
          className="option"
          onClick={() => {
            auth.signOut();
            logOutUser();
          }}
        >
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}

      <Link className="option" to="/cart">
        CART
      </Link>
    </div>
  </div>
);

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

const mapDispatchToProps = dispatch => ({
  logOutUser: () => dispatch(setCurrentUser(null))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
