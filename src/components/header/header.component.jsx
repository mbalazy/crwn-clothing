import React from 'react';
import './header.style.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import CartIcon from '../cart&checkout/cart-icon/cart-icon.component';
import CartDropdown from '../cart&checkout/cart-dropdown/cart-dropdown.component';

import { connect } from 'react-redux';
import { setCurrentUser } from '../../redux/reducers/user/user.actions';

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/reducers/user/user.selectors';
import { selectCartHidden } from '../../redux/reducers/cart/cart.selectors';

import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser, logOutUser, isCartDropdownVisible }) => (
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
      <CartIcon />
    </div>
    {isCartDropdownVisible ? <CartDropdown /> : null}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isCartDropdownVisible: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
  logOutUser: () => dispatch(setCurrentUser(null))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
