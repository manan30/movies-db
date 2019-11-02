import React from 'react';
import { CarouselContainer } from './styled';

function Carousel({ children }) {
  return <CarouselContainer>{children}</CarouselContainer>;
}

export default Carousel;
