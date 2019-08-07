import React from 'react';
import { shallow } from 'enzyme';

import Header from '../Header';

describe('<Header/>', () => {
  it('should render correctly', () => {
    const searchInputMock = jest.fn();
    const handleChangeMock = jest.fn();

    const wrapper = shallow(
      <Header
        handleSubmit={searchInputMock}
        handleChange={handleChangeMock}
        searchText=""
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
