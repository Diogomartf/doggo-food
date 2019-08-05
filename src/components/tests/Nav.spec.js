import React from 'react';
import { shallow, mount } from 'enzyme';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import theme from '../../styles';

import Nav from '../Nav';

describe('<Nav/>', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Nav />);

    expect(wrapper).toMatchSnapshot();
  });

  it('render with correct styles', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <Nav />
      </ThemeProvider>
    );

    expect(wrapper.find('Logo')).toHaveStyleRule(
      'color',
      `${theme.colors.primary}`
    );

    expect(wrapper.prop('theme')).toEqual(theme);
  });
});
