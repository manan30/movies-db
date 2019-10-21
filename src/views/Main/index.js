import React, { useState, useEffect } from 'react';

import HeaderBar from '../../components/HeaderBar';
import MoviesGrid from '../../components/Grid';

import Get from '../../api/Get';

import { HeaderSection, MoviesGridSection } from './styled';

function Main() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    try {
      (async () => {
        const popularMovies = await Get.popularMovies();
        setMovies(popularMovies.data.results);
      })();
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <>
      <HeaderSection>
        <HeaderBar title='Movies Database' />
      </HeaderSection>
      <MoviesGridSection>
        <MoviesGrid items={movies} />
      </MoviesGridSection>
    </>
  );
}

export default Main;
