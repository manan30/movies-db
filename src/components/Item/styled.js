import styled from 'styled-components';

const Container = styled.div`
  display: inline-flex;
  height: 200px;
  width: 300px;
  margin-top: 16px;
  margin-bottom: 20px;
  margin-right: 15px;
  flex-grow: 1;
  padding: 15px;

  background: white;
  box-shadow: 10px 5px 15px #e0e5ec;
`;

const Image = styled.div`
  height: 128px;
  width: 80px;
  margin-top: -32px;

  background-color: white;
  background-image: url(${props => props.image && props.image});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 3px 2px 4px #dbdee3;
`;

const Title = styled.span`
  margin-left: 20px;
  margin-top: 5px;
  margin-bottom: 15px;

  font-size: 16px;
  font-weight: bold;
  color: #9d9fb0;
`;

export { Container, Image, Title };
