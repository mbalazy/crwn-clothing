import styled from 'styled-components';

export const CartItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 120px;
  margin: 15px 0;

  .image {
    width: 110px;
    height: 140px;
    background-size: cover;
    background-position: center;
  }

  .details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 20px;
    margin: 0 auto 0 24px;

    .item-name {
      margin-top: 7px;
    }

    .arrows {
      display: flex;
      margin: 20px 0 10px;

      .arrow {
        margin: 2px 8px 0 0;
        padding: 3px 6px;
      }
    }
  }
`;
