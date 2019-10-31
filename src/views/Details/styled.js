import styled from 'styled-components';

const MovieBackdropSection = styled.section`
  height: 100vh;
  width: 100%;

  background-image: url(${props => props.image && props.image});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;

  border: none;

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

export { MovieBackdropSection, BackButton };
