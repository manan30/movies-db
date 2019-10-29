import React from 'react';
import PropTypes from 'prop-types';

import { Container, Image, Title } from './styled';

function Item({ image, title, poster }) {
  return (
    <Container>
      <Image image={image} />
      <Title>{title}</Title>
    </Container>
  );
}

Item.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string
};

Item.defaultProps = {
  image: '',
  title: ''
};

export default Item;
