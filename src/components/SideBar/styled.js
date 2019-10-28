import styled from 'styled-components';

const SideBarItem = styled.div`
  width: 100%;
  height: 48px;
  margin-bottom: 10px;
`;

const ItemContainer = styled.div`
  width: 100%;
  height: 100%;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
`;

const ItemActiveTick = styled.div`
  width: 3px;
  height: 100%;
  background-color: white;
`;

const ItemIcon = styled.div`
  width: 24px;
  height: 24px;
  margin: 0 15px;
  background-color: black;
  background-image: url(${props => props.icon && props.icon});
  background-position: center center;
  background-repeat: no-repeat;
`;

const ItemText = styled.span`
  font-size: 16px;
  color: ${props => (props.color ? props.color : '#DEE1E7')};
`;

export { SideBarItem, ItemContainer, ItemActiveTick, ItemIcon, ItemText };
