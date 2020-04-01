import styled, { css } from 'styled-components';

const invertedStyles = css`
  color: black;
  background-color: white;
  border: 1px solid black;

  &:hover {
    color: white;
    background-color: black;
  }
`;

const googleSignInStyles = css`
  background-color: #4285f4;
  transition: all 0.1s;

  &:hover,
  &:focus {
    color: white;
    background-color: #357ae8;
  }
`;

const getButtonStyles = props => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }
  return props.inverted ? invertedStyles : '';
};

export const CustomButtonContainer = styled.button`
  font-size: 15px;
  font-family: inherit;
  color: white;
  background-color: black;
  padding: 20px 30px;
  width: auto;
  min-width: 150px;
  border: 1px solid black;
  cursor: pointer;
  transition: all 0.1s;
  text-transform: uppercase;
  font-weight: bolder;
  display: flex;
  justify-content: center;

  &:hover,
  &:focus {
    color: black;
    background-color: white;
  }

  &:focus {
    outline: 1px solid #d3d3d3;
    outline-offset: -4px;
  }

  &:active {
    transform: translateY(3px);
  }

  ${getButtonStyles}
`;
