import React, { useState, useEffect } from 'react';

// import HeaderBar from '../../components/HeaderBar';
// import MoviesGrid from '../../components/Grid';

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

  useEffect(() => {
    try {
      (async () => {
        const popularMovies = await Get.movies('popular');
        setMovies(state => {
          state.popular = popularMovies.data.results;
          return state;
        });
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
  };

  return (
    <RootContainer>
      <SideBarSection>
        <SideBar handler={fetch} />
      </SideBarSection>
      <MoviesGridSection />
      {/* <HeaderSection>
        <HeaderBar title='Movies Database' />
      </HeaderSection> */}
    </RootContainer>
  );
}

export default Main;
