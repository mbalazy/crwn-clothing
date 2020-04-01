import styled from 'styled-components';

export const ImageContainer = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  transition: box-shadow 0.15s;
  background-image: url(${props => props.image});
`;

export const CollectionItemContainer = styled.div`
  display: flex;
  flex: 1 0 180px;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  margin: 4px;

  .image {
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
    transition: box-shadow 0.15s;
  }

  &:hover button,
  &:target button {
    opacity: 1;
  }

  &:hover *:not(button) {
    box-shadow: inset 0 0 0 100vw rgba(255, 255, 255, 0.14);
  }

  button {
    opacity: 0;
    position: absolute;
    bottom: 10%;
    width: 80%;
  }
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;

  .price {
    width: 10%;
    margin-right: 12px;
  }
`;

export const NameContainer = styled.span`
  margin-left: 8px;
  width: 90%;
  margin-bottom: 15px;
`;

export const PriceContainer = styled.span`
  width: 10%;
  margin-right: 12px;
`;
