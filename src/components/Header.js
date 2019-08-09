import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Nav from './Nav';
import SearchBox from './SearchBox';
import RecentSearches from './RecentSearches';

const Header = ({
  searchText,
  recentSearches,
  handleSubmit,
  handleChange,
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

Header.propTypes = {
  searchText: PropTypes.string.isRequired,
  recentSearches: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  deleteRecentSearch: PropTypes.func.isRequired,
  onClickRecentSearch: PropTypes.func.isRequired
};

export default Header;
