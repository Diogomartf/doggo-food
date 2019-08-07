import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import theme from '../../styles';

import EmptyState from '../EmptyState';

describe('<EmptyState/>', () => {
  it('should render correctly', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <EmptyState />
      </ThemeProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
