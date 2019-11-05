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
  width: 100%;
  height: calc(100% - 35%);
  margin: 10% 0;

  background-color: white;
`;

const DetailsColumn = styled.div`
  height: calc(${props => (props.scroll && '100% - 40px') || '100%'});
  width: calc(${props => props.width && props.width} - 40px);
  background-color: ${props => props.bg && props.bg};
  padding: 20px;

  overflow-y: ${props => props.scroll && 'scroll'};
`;

const MovieImage = styled.div`
  height: 256px;
  width: 100%;
  margin-top: -150px;

  /* background-color: white; */
  background-image: url(${props => props.image && props.image});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 3px 2px 4px #dbdee3;
`;

const Text = styled.div`
  width: 100%;
  margin-bottom: ${props => (props.bottom && props.bottom) || '16px'};

  font-size: ${props => (props.size && props.size) || '16px'};
  font-weight: ${props => (props.weight && props.weight) || ''};
  color: ${props => (props.color && props.color) || '#9D9FB0'};
`;

const CarouselContainer = styled.div`
  height: 200px;
  width: 100%;
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
  DetailsColumn,
  MovieImage,
  Text,
  CarouselContainer,
  CarouselItem
};
