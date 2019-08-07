import React from 'react';
import { shallow, mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import theme from '../../styles';

import Recipe from '../Recipe';

const recipe = {
  title: 'Alfredo Recipe',
  href: 'http://www.grouprecipes.com/77213/alfredo-sauce-weight-watchers.html',
  ingredients: 'garlic, pesto, water',
  thumbnail: 'http://img.recipepuppy.com/306873.jpg'
};

describe('<Recipe/>', () => {
  it('should render correctly', () => {
    const wrapper = shallow(
      <Recipe
        key={recipe.href}
        title={recipe.title}
        ingredients={recipe.ingredients}
        url={recipe.href}
        image={recipe.thumbnail}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should not render label when no lactose ingredients', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <Recipe
          key={recipe.href}
          title={recipe.title}
          ingredients={recipe.ingredients}
          url={recipe.href}
          image={recipe.thumbnail}
        />
      </ThemeProvider>
    );

    expect(wrapper.find('Label')).toHaveLength(0);
  });

  it('should render label when cheese in ingredients', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <Recipe
          key={recipe.href}
          title={recipe.title}
          ingredients="garlic, pesto, cheese"
          url={recipe.href}
          image={recipe.thumbnail}
        />
      </ThemeProvider>
    );

    expect(wrapper.find('Label')).toHaveLength(1);
  });

  it('should render label when milk in ingredients', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <Recipe
          key={recipe.href}
          title={recipe.title}
          ingredients="garlic, pesto, milk"
          url={recipe.href}
          image={recipe.thumbnail}
        />
      </ThemeProvider>
    );

    expect(wrapper.find('Label')).toHaveLength(1);
  });
});
