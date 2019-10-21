import styled from 'styled-components';

const HeaderSection = styled.section`
  height: 48px;
`;

const SearchBarSection = styled.section``;

const MoviesGridSection = styled.section`
  height: calc(100vh - 88px);
  width: calc(100% - 40px);
  padding: 20px;
  background: black;
  overflow-y: scroll;
`;

export { HeaderSection, MoviesGridSection };
