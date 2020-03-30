import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  width: 90%;
  height: 70px;
  margin: 0 auto;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  flex-wrap: wrap;
`;

export const UserName = styled.div`
  margin-right: auto;
  margin-left: 20px;
  text-transform: uppercase;
`;

export const LogoContainer = styled(Link)`
  width: 70px;
`;

export const OptionsContainer = styled.nav`
  width: 70%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const OptionLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  min-width: 60px;
  margin-right: 20px;
  padding: 8px 14px;
  transition: transform 0.2s;
  cursor: pointer;

  &:last-child {
    margin-right: 0px;
  }

  &:hover {
    transform: translateY(2px);
    cursor: pointer;
  }
`;
