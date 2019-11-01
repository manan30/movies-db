import styled from 'styled-components';

const MovieBackdropSection = styled.section`
  height: 100vh;
  width: 100%;

  background-image: url(${props => props.image && props.image});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;

  border: none;
  overflow: none;
  opacity: 0.55;

  transform: scale(1.1);
  filter: blur(1rem);
  -webkit-filter: blur(1rem);
`;

const BackButton = styled.div`
  position: absolute;
  top: 16px;
  left: 24px;
  height: 32px;
  width: 32px;
  color: white;

  svg {
    height: 100%;
    width: 100%;
  }
`;

const DetailsContainer = styled.div`
  display: inline-flex;
  position: absolute;
  top: 15%;
  height: 85%;
  width: calc(100vw - 240px);
  margin: 90px;
  padding: 30px;

  background-color: white;
`;

const MovieImage = styled.div`
  display: inline-flex;
  height: 256px;
  width: 180px;
  margin-top: -150px;
  padding: 20px;

  background-color: white;
  background-image: url(${props => props.image && props.image});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 3px 2px 4px #dbdee3;
`;

const TextContainer = styled.div`
  height: 100%;
  width: calc(100% - 60px);
  margin-left: 30px;
`;

const Text = styled.div`
  font-size: ${props => (props.size && props.size) || '16px'};
  font-weight: ${props => (props.weight && props.weight) || ''};
  color: ${props => (props.color && props.color) || '#9D9FB0'};
`;

export {
  MovieBackdropSection,
  BackButton,
  DetailsContainer,
  MovieImage,
  TextContainer,
  Text
};
