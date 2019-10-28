import React, { useState, useEffect } from 'react';

import HeaderBar from '../../components/HeaderBar';
import MoviesGrid from '../../components/Grid';

import Get from '../../api/Get';

import {
  HeaderSection,
  MoviesGridSection,
  SideBarSection,
  RootContainer
} from './styled';
import SideBar from '../../components/SideBar';

function Main() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    try {
      (async () => {
        const popularMovies = await Get.popularMovies();
        setMovies(popularMovies.data.results);
      })();
    } catch (e) {
      console.log({ e });
    }
  }, []);

  return (
    <RootContainer>
      <SideBarSection>
        <SideBar />
      </SideBarSection>
      <MoviesGridSection />
      {/* <HeaderSection>
        <HeaderBar title='Movies Database' />
      </HeaderSection> */}
    </RootContainer>
  );
}

export default Main;
