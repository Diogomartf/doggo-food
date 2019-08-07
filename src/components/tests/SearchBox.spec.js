import React from 'react';
import { shallow, mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import theme from '../../styles';

import SearchBox from '../SearchBox';

describe('SearchBox', () => {
  it('should render correctly', () => {
    const handleSubmitMock = jest.fn();
    const handleChangeMock = jest.fn();

    const wrapper = shallow(
      <SearchBox
        handleSubmit={handleSubmitMock}
        handleChange={handleChangeMock}
        searchText={''}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('handleSubmit is called with correct data', async () => {
    const handleSubmitMock = jest.fn();
    const handleChangeMock = jest.fn();
    const data = { somedata: 'data' };
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <SearchBox
          handleSubmit={handleSubmitMock}
          handleChange={handleChangeMock}
          searchText={''}
        />
      </ThemeProvider>
    );

    wrapper
      .find('SearchInputForm')
      .props()
      .onSubmit(data);
    expect(handleSubmitMock).toBeCalledWith({ somedata: 'data' });
  });
});
