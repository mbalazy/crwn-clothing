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

import { useSelector, useDispatch } from 'react-redux';
import { signOutStart } from '../../redux/reducers/user/user.actions';

import { selectCurrentUser } from '../../redux/reducers/user/user.selectors';
import { selectCartHidden } from '../../redux/reducers/cart/cart.selectors';

const Header = () => {
  const dispatch = useDispatch();

  const currentUser = useSelector(selectCurrentUser);
  const isCartDropdownVisible = useSelector(selectCartHidden);

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>

      {currentUser ? (
        <UserName>HELLO {currentUser.displayName}</UserName>
      ) : null}

      <OptionsContainer>
        <OptionLink to="/">HOMEPAGE</OptionLink>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/contact">CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink
            as="div"
            onClick={() => {
              dispatch(signOutStart());
            }}
          >
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
};

export default Header;
