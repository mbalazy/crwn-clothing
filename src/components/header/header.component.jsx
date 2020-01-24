import React from 'react';
import './header.style.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import { connect } from 'react-redux';
import { setCurrentUser } from '../../redux/user/user.actions';

import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser, setCurrentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>

    {currentUser ? (
      <div className="helloUser">HELLO {currentUser.displayName}</div>
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
            setCurrentUser(null);
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
  setCurrentUser: user => dispatch(setCurrentUser(user)) //dispatch pass object to every reducer
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
