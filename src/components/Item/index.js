import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import {
  Container,
  Content,
  Image,
  Text,
  FAB,
  Separator,
  Button
} from './styled';

function Item({ id, image, title, overview, ratings }) {
  return (
    <Container>
      <Image image={image} />
      <Content>
        <Text weight='bolder' relative>
          {title}
        </Text>
        <Text color='#BFC0CE' height>
          {overview}
        </Text>
        <FAB>{ratings}</FAB>
        <Separator />
        <Link to={{ pathname: `/details/${id}` }}>
          <Button>Details</Button>
        </Link>
      </Content>
    </Container>
  );
}

Item.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  title: PropTypes.string,
  overview: PropTypes.string,
  ratings: PropTypes.string
};

Item.defaultProps = {
  id: '',
  image: '',
  title: '',
  overview: '',
  ratings: ''
};

export default Item;
