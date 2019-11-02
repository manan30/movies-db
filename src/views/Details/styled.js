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
  /* overflow-y: scroll; */

  background-color: white;
`;

const MovieImage = styled.div`
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
  position: ${props => (props.position && props.position) || ''};
  top: ${props => props.top && props.top};
  height: ${props => (props.height && props.height) || '100%'};
  width: ${props => (props.width && props.width) || '100%'};
  margin-left: ${props => (props.marginLeft && props.marginLeft) || '0'};
  padding: ${props => props.padding && props.padding};
`;

const Text = styled.div`
  width: ${props => (props.width && props.width) || '100%'};
  margin-bottom: ${props => (props.bottom && props.bottom) || '16px'};

  font-size: ${props => (props.size && props.size) || '16px'};
  font-weight: ${props => (props.weight && props.weight) || ''};
  color: ${props => (props.color && props.color) || '#9D9FB0'};
`;

const CarouselContainer = styled.div`
  position: absolute;
  top: ${props => props.top && props.top};
  height: 200px;
  width: calc(100% - 65px);
  background: red;
`;

const CarouselItem = styled.div`
  display: inline-flex;
  height: 100%;
  width: 128px;
  flex-wrap: nowrap;
  margin-right: 15px;

  background: url(${props => props.image && props.image});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
`;

export {
  MovieBackdropSection,
  BackButton,
  DetailsContainer,
  MovieImage,
  TextContainer,
  Text,
  CarouselContainer,
  CarouselItem
};
