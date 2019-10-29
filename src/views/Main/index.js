import React, { useState, useEffect } from 'react';

import MoviesGrid from '../../components/Grid';

import Get from '../../api/Get';

import {
  // HeaderSection,
  MoviesGridSection,
  SideBarSection,
  RootContainer
} from './styled';
import SideBar from '../../components/SideBar';

function Main() {
  const [movies, setMovies] = useState({});
  const [movieType, setMovieType] = useState();

  useEffect(() => {
    try {
      (async () => {
        const popularMovies = await Get.movies('now_playing');
        setMovies(state => {
          const newState = { ...state };
          newState.now_playing = popularMovies.data.results;
          return newState;
        });
        setMovieType('now_playing');
      })();
    } catch (e) {
      console.log({ e });
    }
  }, []);

  const fetch = async what => {
    const split = what.split(' ');
    const type = split.reduce((acc, curr, i) => {
      return acc
        .concat(curr.toLowerCase())
        .concat(i !== split.length - 1 ? '_' : '');
    }, '');
    if (!movies[type]) {
      const fetchedMovies = await Get.movies(type);
      setMovies(state => {
        const newState = { ...state };
        newState[type] = fetchedMovies.data.results;
        return newState;
      });
    }
    setMovieType(type);
  };

  return (
    <RootContainer>
      <SideBarSection>
        <SideBar handler={fetch} />
      </SideBarSection>
      <MoviesGridSection>
        <MoviesGrid items={movies[movieType]} />
      </MoviesGridSection>
    </RootContainer>
  );
}

export default Main;
