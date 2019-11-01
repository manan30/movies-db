import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';

import Get from '../../api/Get';
import Constants from '../../utils/Constants';

import {
  MovieBackdropSection,
  BackButton,
  DetailsContainer,
  MovieImage,
  TextContainer,
  Text
} from './styled';

function Details() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});

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
        <TextContainer>
          <Text>{movieDetails.title}</Text>
        </TextContainer>
      </DetailsContainer>
    </>
  );
}

export default Details;
