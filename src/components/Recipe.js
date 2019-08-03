import React from 'react';
import styled from 'styled-components';

const Recipe = ({ title, image, url, ingredients }) => (
  <RecipeBox href={url}>
    <ImageBackground src={image} />
    <Content>
      <Title>{title}</Title>
    </Content>
    <Ingredients>{ingredients}</Ingredients>
  </RecipeBox>
);

const RecipeBox = styled.a`
  text-decoration: none;
  outline: none;
  cursor: pointer;
`;

const Content = styled.div`
  margin-top: 12px;
`;

const Ingredients = styled.div`
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;

  color: ${({ theme }) => theme.colors.darkGray};
`;

const Title = styled.div`
  margin-top: 12px;
  margin-bottom: 4px;

  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.black};
`;

const ImageBackground = styled.div`
  width: 100%;
  height: 262px;
  background-image: url("${({ src }) => src}");

  background-color: ${({ theme }) => theme.colors.gray};
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
`;

export default Recipe;
