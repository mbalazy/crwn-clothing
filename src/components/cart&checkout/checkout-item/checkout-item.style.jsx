import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

  & > *:not(.remove) {
    width: 23%;
  }

  .quantity {
    padding-left: 20px;
    display: flex;
    align-items: center;

    .arrow {
      cursor: pointer;
      margin-top: 3px;
      display: inline-block;
      border: none;
      // outline: none;

      &:active {
        outline: none;
      }
    }
  }

  & .remove {
    margin-right: 20px;
    border: none;
    transition: transform 0.14s;
    cursor: pointer;

    &:hover {
      transform: translateY(2px);
    }
    padding: 12px;
  }
`;

export const ImageContainer = styled.div`
  width: 20%;
  height: 150px;
  margin-right: 16px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
`;
