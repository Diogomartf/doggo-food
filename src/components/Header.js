import React from 'react';
import styled from 'styled-components';

import Nav from './Nav';
import SearchBox from './SearchBox';
import RecentSearches from './RecentSearches';

const Header = ({
  handleSubmit,
  handleChange,
  searchText,
  inputFocus,
  handleOnFocus,
  handleOnBlur,
  recentSearches
}) => (
  <div>
    <Nav />
    <Relative>
      <SearchBox
        searchText={searchText}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        handleOnFocus={handleOnFocus}
        handleOnBlur={handleOnBlur}
      />
      {inputFocus && <RecentSearches searches={recentSearches} />}
    </Relative>
  </div>
);

const Relative = styled.div`
  position: relative;
`;

export default Header;
