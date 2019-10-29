import styled from 'styled-components';

const RootContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: inline-flex;
`;
const SideBarSection = styled.section`
  width: 20%;
  background-color: white;
  box-shadow: 3px 0 15px #e5e9f0;
`;

const HeaderSection = styled.section`
  height: 48px;
`;

const SearchBarSection = styled.section``;

const MoviesGridSection = styled.section`
  width: calc(80% - 40px);
  padding: 20px;
  overflow-y: scroll;
`;

export {
  RootContainer,
  SideBarSection,
  HeaderSection,
  SearchBarSection,
  MoviesGridSection
};
