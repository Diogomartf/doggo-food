import React from 'react';
import styled from 'styled-components';

import Nav from './Nav';
import SearchBox from './SearchBox';
import RecentSearches from './RecentSearches';

const Header = ({
  handleSubmit,
  handleChange,
  searchText,
  recentSearches,
  deleteRecentSearch,
  onClickRecentSearch
}) => (
  <div>
    <Nav />
    <Relative>
      <SearchBox
        searchText={searchText}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      <RecentSearches
        searches={recentSearches}
        deleteRecentSearch={deleteRecentSearch}
        onClick={onClickRecentSearch}
      />
    </Relative>
  </div>
);

const Relative = styled.div`
  position: relative;
`;

export default Header;
