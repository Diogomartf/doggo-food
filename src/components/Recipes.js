import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Recipe from './Recipe';
import EmptyState from './EmptyState';

const Recipes = ({ recipes, searchText }) => (
  <Container>
    {recipes.length > 0 ? (
      <Fragment>
        <Title>Recipes with {searchText}</Title>
        <Grid>
          {recipes.map(recipe => (
            <Recipe
              key={recipe.href}
              title={recipe.title}
              ingredients={recipe.ingredients}
              url={recipe.href}
              image={recipe.thumbnail}
            />
          ))}
        </Grid>
      </Fragment>
    ) : (
      <EmptyState />
    )}
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

  @media (min-width: 992px) {
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

Recipes.propTypes = {
  searchText: PropTypes.string.isRequired,
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      ingredients: PropTypes.string.isRequired
    })
  )
};

export default Recipes;
