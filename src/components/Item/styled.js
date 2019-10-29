import styled from 'styled-components';

const Container = styled.div`
  display: inline-flex;
  height: 150px;
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
  width: 90px;
  margin-top: -32px;

  background-color: white;
  background-image: url(${props => props.image && props.image});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 3px 2px 4px #dbdee3;
`;

const Content = styled.div`
  height: 100%;
  width: 100%;
  margin-left: 20px;
  margin-top: 5px;
  margin-bottom: 15px;
`;

const Text = styled.div`
  position: ${props => props.position && 'relative'};
  margin-bottom: 15px;
  height: ${props => props.height && '3.6em'};

  font-size: ${props => (props.size && props.size) || '16px'};
  font-weight: ${props => (props.weight && props.weight) || ''};
  color: ${props => (props.color && props.color) || '#9D9FB0'};

  overflow: hidden;

  ::after {
    content: '';
    text-align: right;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 40%;
    height: 1.2em;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 1) 50%
    );
  }
`;

const FAB = styled.div`
  display: flex;
  height: 48px;
  width: 48px;
  margin-top: -150px;
  border-radius: 50%;
  float: right;

  color: white;
  box-shadow: 4px 4px 10px #c9d8db;
  background-color: #2879ff;

  /* text-align: center; */
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
`;

const Separator = styled.hr`
  position: relative;
  height: 2px;
  margin: 0 10px;
  background: #f2f4f8;
  border: none;
  ::before {
    content: '';
    text-align: left;
    position: absolute;
    left: 0;
    width: 5%;
    height: 2px;
    background: linear-gradient(
      to left,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 1) 50%
    );
  }
  ::after {
    content: '';
    text-align: right;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 5%;
    height: 2px;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 1) 50%
    );
  }
`;

export { Container, Content, Image, Text, FAB, Separator };
