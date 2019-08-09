import React from 'react';
import { shallow, mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import theme from './styles';
import api from './api';

import App from './App';

const mockData = {
  data: {
    results: [
      {
        title: 'Salmon And Pesto Pasta Salad',
        href:
          'http://www.bigoven.com/130421-Salmon-And-Pesto-Pasta-Salad-recipe.html',
        ingredients:
          'salmon, pasta (in general), cherry tomato, pesto, olive oil, white wine vinegar, pesto',
        thumbnail: ''
      },
      {
        title: 'Fresh Pesto Pasta Salad',
        href:
          'http://find.myrecipes.com/recipes/recipefinder.dyn?action=displayRecipe&recipe_id=258269',
        ingredients:
          'pasta (in general), red wine vinegar, sugar, black pepper, salt, dijon mustard, garlic, olive oil, basil, parmesan cheese, pine nuts, grape tomatoes',
        thumbnail: 'http://img.recipepuppy.com/544602.jpg'
      },
      {
        title:
          'Whole-Wheat Pasta Shells with Spicy Tomato Pesto and Winter Greens',
        href:
          'http://find.myrecipes.com/recipes/recipefinder.dyn?action=displayRecipe&recipe_id=521883',
        ingredients:
          'pesto, water, sun dried tomato, almonds, parmesan cheese, basil, garlic, salt, red pepper, olive oil, salad greens, olive oil, onions, swiss chard, water, salt, black pepper, pasta, pasta (in general), parmesan cheese',
        thumbnail: 'http://img.recipepuppy.com/549528.jpg'
      }
    ]
  }
};

describe('<App/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  // it('should mount correctly', () => {
  //   wrapper = mount(
  //     <ThemeProvider theme={theme}>
  //       <App />
  //     </ThemeProvider>
  //   );

  //   expect(wrapper).toMatchSnapshot();
  // });

  it('handleChange should change state', () => {
    wrapper.instance().handleChange('pizza');
    expect(wrapper.state().searchText).toEqual('pizza');
  });

  it('should call handleSubmit correctly', () => {
    wrapper.setState({ searchText: 'pesto' });
    api.recipes.list = jest.fn().mockResolvedValue(mockData);

    const mockFormData = {
      preventDefault: jest.fn()
    };

    wrapper.instance().handleSubmit(mockFormData);

    expect(api.recipes.list).toHaveBeenCalledWith({ ingredients: 'pesto' });
  });

  it('should not call api when search text has less than 3 chars', () => {
    wrapper.setState({ searchText: 'pe' });
    api.recipes.list = jest.fn();

    const mockFormData = {
      preventDefault: jest.fn()
    };

    wrapper.instance().handleSubmit(mockFormData);

    expect(api.recipes.list).not.toHaveBeenCalled();
  });

  it('onClickRecentSearch should call api with recent search', () => {
    api.recipes.list = jest.fn().mockResolvedValue(mockData);
    wrapper.instance().onClickRecentSearch('pesto');

    expect(api.recipes.list).toHaveBeenCalledWith({ ingredients: 'pesto' });
  });

  it('deleteRecentSearch should remove select element from recentSearches', () => {
    wrapper.setState({ recentSearches: ['pesto', 'cheese', 'garlic'] });
    wrapper.instance().deleteRecentSearch(1);

    expect(wrapper.state().recentSearches).toEqual(['pesto', 'garlic']);
  });
});
