import React from 'react';
import { shallow, mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import theme from '../../styles';

import Recipes from '../Recipes';

const recipes = [
  {
    title: 'Alfredo Recipe',
    href:
      'http://www.grouprecipes.com/77213/alfredo-sauce-weight-watchers.html',
    ingredients: 'garlic, pesto, water',
    thumbnail: 'http://img.recipepuppy.com/306873.jpg'
  },
  {
    title: "Grandma Sugar's Shell Macaroni and Cheese",
    href:
      'http://www.recipezaar.com/Grandma-Sugars-Shell-Macaroni-and-Cheese-311887',
    ingredients:
      'black pepper, butter, pasta (in general), milk, cheddar cheese, velveeta cheese',
    thumbnail: 'http://img.recipepuppy.com/683295.jpg'
  },
  {
    title: 'Cheese-Stuffed Shells in Marinara Sauce',
    href:
      'http://allrecipes.com/Recipe/Cheese-Stuffed-Shells-in-Marinara-Sauce-2/Detail.aspx',
    ingredients:
      'ricotta cheese, black pepper, parmesan cheese, pasta (in general), eggs, mozzarella cheese',
    thumbnail: 'http://img.recipepuppy.com/1947.jpg'
  }
];

describe('<Recipe/>', () => {
  it('should render correctly', () => {
    const wrapper = shallow(
      <Recipes recipes={recipes} searchText={'cheese'} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render EmptyState when recipes length is 0', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <Recipes recipes={[]} searchText={'grass'} />
      </ThemeProvider>
    );

    expect(wrapper.find('EmptyState')).toHaveLength(1);
  });

  it('should render 3 recipes', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <Recipes recipes={recipes} searchText={'cheese'} />
      </ThemeProvider>
    );

    expect(wrapper.find('Recipe')).toHaveLength(3);
  });
});
