import React from 'react';

import Nav from './Nav';
import SearchBox from './SearchBox';

const Header = ({ handleSubmit, handleChange, searchText }) => (
  <div>
    <Nav />
    <SearchBox
      searchText={searchText}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
    />
  </div>
);

export default Header;
