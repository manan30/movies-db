import React from 'react';
import PropTypes from 'prop-types';

import { ReviewBackground, ReviewText, ReviewURL } from './styled';

function Reviews({ reviews }) {
  return (
    <>
      {reviews.map(review => (
        <ReviewBackground key={review.id}>
          <ReviewText size='12px' color='red'>
            {review.author.toUpperCase()}
          </ReviewText>
          <ReviewText clamp>{review.content}</ReviewText>
          <ReviewURL href={review.url} target='_blank'>
            Full review
          </ReviewURL>
        </ReviewBackground>
      ))}
    </>
  );
}

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.any)
};

Reviews.defaultProps = {
  reviews: []
};

export default Reviews;
