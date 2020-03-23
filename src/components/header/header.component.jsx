import React from 'react';

import {
  HeaderContainer,
  UserName,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from './header.style.jsx';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import CartIcon from '../cart&checkout/cart-icon/cart-icon.component';
import CartDropdown from '../cart&checkout/cart-dropdown/cart-dropdown.component';

import { connect } from 'react-redux';
import { signOutStart } from '../../redux/reducers/user/user.actions';

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/reducers/user/user.selectors';
import { selectCartHidden } from '../../redux/reducers/cart/cart.selectors';

const Header = ({ currentUser, signOutUser, isCartDropdownVisible }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>

    {currentUser ? <UserName>HELLO {currentUser.displayName}</UserName> : null}

    <OptionsContainer>
      <OptionLink to="/">HOMEPAGE</OptionLink>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/contact">CONTACT</OptionLink>
      {currentUser ? (
        <OptionLink as="div" onClick={signOutUser}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="/signin">SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {isCartDropdownVisible ? <CartDropdown /> : null}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isCartDropdownVisible: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
  signOutUser: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
