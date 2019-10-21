import React from 'react';
import PropTypes from 'prop-types';

import GridItem from '../Item';

import GridContainer from './styled';

function Grid({ items }) {
  return (
    <GridContainer>
      {items.map(item => (
        <GridItem title={item.title} />
      ))}
    </GridContainer>
  );
}

Grid.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any)
};

Grid.defaultProps = {
  items: []
};

export default Grid;
