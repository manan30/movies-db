import React from 'react';
import { MdSearch } from 'react-icons/md';
import PropTypes from 'prop-types';

import { SearchBarContainer, SearchIcon, SearchInput } from './styled';

function Search({ handler }) {
  return (
    <SearchBarContainer>
      <SearchIcon>
        <MdSearch />
      </SearchIcon>
      <SearchInput onChange={handler} placeholder='Search Movies' />
    </SearchBarContainer>
  );
}

Search.propTypes = {
  handler: PropTypes.func
};

Search.defaultProps = {
  handler: () => {}
};

export default Search;
