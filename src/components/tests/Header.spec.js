import React from 'react';
import { shallow } from 'enzyme';

import Header from '../Header';

describe('<Header/>', () => {
  it('should render correctly', () => {
    const searchInputMock = jest.fn();
    const handleChangeMock = jest.fn();
    const deleteRecentSearchMock = jest.fn();
    const onClickRecentSearchMock = jest.fn();

    const wrapper = shallow(
      <Header
        searchText=""
        recentSearches={[]}
        handleSubmit={searchInputMock}
        handleChange={handleChangeMock}
        deleteRecentSearch={deleteRecentSearchMock}
        onClickRecentSearch={onClickRecentSearchMock}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
