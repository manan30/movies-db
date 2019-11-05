import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';

import Carousel from '../../components/Carousel';

import Get from '../../api/Get';
import Constants from '../../utils/Constants';

import {
  MovieBackdropSection,
  BackButton,
  DetailsContainer,
  MovieImage,
  Text,
  CarouselContainer,
  CarouselItem,
  DetailsColumn
} from './styled';
import Reviews from '../../components/Reviews';

function Details() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [reviews, setReviews] = useState([]);
  const [similar, setSimilar] = useState([]);
  const [recommended, setRecommended] = useState([]);
  const history = useHistory();

  const handleBackButton = () => {
    history.goBack();
  };

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
        const { data } = await Get.reviews(id);
        setReviews(data.results);
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
      <BackButton onClick={handleBackButton}>
        <MdArrowBack />
      </BackButton>
      <DetailsContainer>
        <DetailsColumn width='15%'>
          <MovieImage
            image={`${Constants.IMAGE_URL}${movieDetails.poster_path}`}
          />
        </DetailsColumn>
        <DetailsColumn width='60%' scroll>
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
        </DetailsColumn>
        <DetailsColumn width='25%' scroll>
          <Reviews reviews={reviews} />
        </DetailsColumn>
      </DetailsContainer>
    </>
  );
}

export default Details;
