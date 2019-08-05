import React from 'react';
import styled from 'styled-components';

const Recipe = ({ title, image, url, ingredients }) => {
  const hasLactose =
    ingredients.includes('cheese') || ingredients.includes('milk');

  return (
    <RecipeBox href={url}>
      <ImageBackground src={image}>
        {hasLactose && <Label>Lactose</Label>}
      </ImageBackground>

      <Content>
        <Title>{title}</Title>
      </Content>
      <Ingredients>{ingredients}</Ingredients>
    </RecipeBox>
  );
};

const RecipeBox = styled.a`
  text-decoration: none;
  outline: none;
  cursor: pointer;
`;

const Label = styled.div`
  position: absolute;
  top: 20px;
  right: 0;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};

  transform: rotate(45deg);
`;
Label.displayName = 'Label';

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
  position: relative;
  width: 100%;
  height: 262px;
  background-image: url("${({ src }) => src}");

  background-color: ${({ theme }) => theme.colors.gray};
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
`;

export default Recipe;
