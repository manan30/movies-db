import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';

import Carousel from '../../components/Carousel';

import Get from '../../api/Get';
import Constants from '../../utils/Constants';

import {
  MovieBackdropSection,
  BackButton,
  DetailsContainer,
  MovieImage,
  TextContainer,
  Text,
  CarouselContainer,
  CarouselItem
} from './styled';

function Details() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [similar, setSimilar] = useState([]);
  const [recommended, setRecommended] = useState([]);

  useEffect(() => {
    try {
      (async () => {
        const results = await Get.movieDetails(id);
        setMovieDetails(results.data);
      })();
    } catch (e) {
      console.error({ e });
    }
  }, [id]);

  useEffect(() => {
    try {
      (async () => {
        const results = await Get.similar(id);
        setSimilar(results.data.results);
      })();
    } catch (e) {
      console.error({ e });
    }
  }, [id]);

  useEffect(() => {
    try {
      (async () => {
        const results = await Get.recommended(id);
        setRecommended(results.data.results);
      })();
    } catch (e) {
      console.error({ e });
    }
  }, [id]);

  return (
    <>
      <MovieBackdropSection
        image={`${Constants.IMAGE_URL}${movieDetails.backdrop_path}`}
      />
      <BackButton>
        <MdArrowBack />
      </BackButton>
      <DetailsContainer>
        <MovieImage
          image={`${Constants.IMAGE_URL}${movieDetails.poster_path}`}
        />
        <TextContainer
          position='absolute'
          top='180px'
          height='calc(100% - 236px)'
          width='180px'
          padding='20px'
        />
        <TextContainer marginLeft='30px' width='calc(100% - 240px)'>
          <Text size='24px' weight='bolder' bottom='10px'>
            {movieDetails.title}
          </Text>
          <i>
            <Text size='18px' weight='bold'>
              {movieDetails.tagline}
            </Text>
          </i>

          {movieDetails.genres && (
            <i>
              <Text>
                {movieDetails.genres.reduce((acc, curr, i) => {
                  return acc
                    .concat(curr.name)
                    .concat(i !== movieDetails.genres.length - 1 ? ', ' : '');
                }, '')}
              </Text>
            </i>
          )}
          <Text width='75%'>{movieDetails.overview}</Text>
        </TextContainer>
        {similar && (
          <CarouselContainer top='40%'>
            <Carousel>
              {similar.map(movie => (
                <CarouselItem
                  image={`${Constants.IMAGE_URL}${movie.poster_path}`}
                />
              ))}
            </Carousel>
          </CarouselContainer>
        )}
        {recommended && (
          <CarouselContainer top='70%'>
            <Carousel>
              {recommended.map(movie => (
                <CarouselItem
                  image={`${Constants.IMAGE_URL}${movie.poster_path}`}
                />
              ))}
            </Carousel>
          </CarouselContainer>
        )}
      </DetailsContainer>
    </>
  );
}

export default Details;
