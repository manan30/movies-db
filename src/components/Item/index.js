import React from 'react';
import PropTypes from 'prop-types';

import { Container, Content, Image, Text } from './styled';

function Item({ image, title, overview, ratings }) {
  return (
    <Container>
      <Image image={image} />
      <Content>
        <Text weight='bolder'>{title}</Text>
        <Text color='#BFC0CE' height position>
          {overview}
        </Text>
      </Content>
    </Container>
  );
}

Item.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  overview: PropTypes.string,
  ratings: PropTypes.string
};

Item.defaultProps = {
  image: '',
  title: '',
  overview: '',
  ratings: ''
};

export default Item;
