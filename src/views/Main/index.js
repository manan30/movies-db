import React, { useState, useEffect } from 'react';

import HeaderBar from '../../components/HeaderBar';

import Get from '../../api/Get';

import { HeaderSection } from './styled';

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
      {movies.map(movie => {
        return (
          <>
            <span>{movie.title}</span>
            <br />
          </>
        );
      })}
    </>
  );
}

export default Main;
