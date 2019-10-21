import styled from 'styled-components';

const ItemContainer = styled.div`
  height: 256px;
  width: 250px;
  background: white;
  margin-bottom: 20px;
  margin-right: 15px;
  flex-grow: 1;
`;

const ItemImage = styled.div`
  height: 196px;
  background: red;
  background-image: url(${props => props.image && props.image});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
`;

const ItemTitle = styled.span`
  padding: 20px 0;
`;

export { ItemContainer, ItemImage, ItemTitle };
