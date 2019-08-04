import React from 'react';
import styled from 'styled-components';
import Recipe from './Recipe';

const recipes = {
  title: 'Recipe Puppy',
  version: 0.1,
  href: 'http://www.recipepuppy.com/',
  results: [
    {
      title: 'Basil Pesto Pomodoro Sauce',
      href: 'http://www.recipezaar.com/Basil-Pesto-Pomodoro-Sauce-221792',
      ingredients: 'pesto, nonstick cooking spray, tomato, onions',
      thumbnail: 'http://img.recipepuppy.com/148477.jpg'
    },
    {
      title: "Ali's Amazing Bruschetta",
      href: 'http://allrecipes.com/Recipe/Alis-Amazing-Bruschetta/Detail.aspx',
      ingredients: 'olive oil, parmesan cheese, onions, tomato',
      thumbnail: 'http://img.recipepuppy.com/30661.jpg'
    },
    {
      title: 'BLT Pasta Salad',
      href: 'http://allrecipes.com/Recipe/BLT-Pasta-Salad/Detail.aspx',
      ingredients: 'bacon, ranch dressing, onions, tomato',
      thumbnail: 'http://img.recipepuppy.com/7095.jpg'
    },
    {
      title: 'Sauce Dijon a la Provencal \r\n\t\t\n',
      href: 'http://www.kraftfoods.com/kf/recipes/sauce-dijon-a-la-54823.aspx',
      ingredients: 'tomato, onions, dijon mustard, sugar',
      thumbnail: 'http://img.recipepuppy.com/601515.jpg'
    },
    {
      title: 'Tomato Alfredo Sauce with Artichokes',
      href:
        'http://allrecipes.com/Recipe/Tomato-Alfredo-Sauce-with-Artichokes/Detail.aspx',
      ingredients: 'flour, whole milk, onions, tomato',
      thumbnail: 'http://img.recipepuppy.com/11220.jpg'
    },
    {
      title: 'Tomato Cheese Crunch',
      href: 'http://allrecipes.com/Recipe/Tomato-Cheese-Crunch/Detail.aspx',
      ingredients: 'cheddar cheese, onions, potato chips, tomato',
      thumbnail: 'http://img.recipepuppy.com/20868.jpg'
    },
    {
      title: 'Basic Guacamole Dip',
      href: 'http://allrecipes.com/Recipe/Basic-Guacamole-Dip/Detail.aspx',
      ingredients: 'avocado, lemon juice, onions, tomato',
      thumbnail: 'http://img.recipepuppy.com/29413.jpg'
    }
  ]
};

const Recipes = ({ searchText }) => (
  <Container>
    <Title>Recipes with {searchText}</Title>
    <Grid>
      {recipes.results.map(recipe => (
        <Recipe
          key={recipe.href}
          title={recipe.title}
          ingredients={recipe.ingredients}
          url={recipe.href}
          image={recipe.thumbnail}
        />
      ))}
    </Grid>
  </Container>
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 24px;
  grid-row-gap: 24px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 998px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Container = styled.div`
  padding: 12px 24px;
`;

const Title = styled.div`
  margin-bottom: 16px;

  font-size: 22px;
  font-weight: 600;
  line-height: 26px;
  color: ${({ theme }) => theme.colors.black};
`;

export default Recipes;
