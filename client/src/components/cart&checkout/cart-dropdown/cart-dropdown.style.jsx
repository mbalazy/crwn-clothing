import styled from 'styled-components';
export const CartDropdownContainer = styled.div`
  position: absolute;
  top: 90px;
  right: 40px;
  width: 300px;
  height: 600px;

  display: flex;
  flex-direction: column;

  padding: 20px;
  border: 1px solid black;
  background-color: white;
  z-index: 5;

  .cart-items {
    height: 400px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
  }

  .empty-cart {
    margin: 50px auto;
  }

  button {
    margin-top: 20px;
  }
`;
