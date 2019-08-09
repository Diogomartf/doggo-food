import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import theme from '../../styles';

import RecentSearches from '../RecentSearches';

describe('<RecentSearches/>', () => {
  const deleteRecentSearchMock = jest.fn();
  const onClickRecentSearchMock = jest.fn();

  it('should render correctly', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <RecentSearches
          searches={['pesto', 'cheese']}
          deleteRecentSearch={deleteRecentSearchMock}
          onClick={onClickRecentSearchMock}
        />
      </ThemeProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should not render if has no searches', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <RecentSearches
          searches={[]}
          deleteRecentSearch={deleteRecentSearchMock}
          onClick={onClickRecentSearchMock}
        />
      </ThemeProvider>
    );
    expect(wrapper.find('SearchWrapper')).toHaveLength(0);
  });

  it('should render box when expanded', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <RecentSearches
          searches={['pesto', 'pizza']}
          deleteRecentSearch={deleteRecentSearchMock}
          onClick={onClickRecentSearchMock}
        />
      </ThemeProvider>
    );
    wrapper.find('CollapseWrapper').simulate('click');
    expect(wrapper.find('Box')).toHaveLength(1);
  });

  it('should have Searchitem and CloseIcon with onClick', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <RecentSearches
          searches={['pesto', 'pizza']}
          deleteRecentSearch={deleteRecentSearchMock}
          onClick={onClickRecentSearchMock}
        />
      </ThemeProvider>
    );
    wrapper.find('CollapseWrapper').simulate('click');

    wrapper
      .find('CloseIcon')
      .first()
      .simulate('click');
    wrapper
      .find('SearchItem')
      .last()
      .simulate('click');

    expect(wrapper.find('Box')).toHaveLength(1);
  });
});
