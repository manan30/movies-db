import React from 'react';
import PropTypes from 'prop-types';

import { ItemContainer, ItemImage, ItemTitle } from './styled';

function Item({ image, title }) {
  return (
    <ItemContainer>
      <ItemImage image={image} />
      <ItemTitle>{title}</ItemTitle>
    </ItemContainer>
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
