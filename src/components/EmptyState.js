import React from 'react';
import styled from 'styled-components';
import Dog from '../images/dog.svg';

const EmptyState = () => (
  <Flex>
    <Image src={Dog} alt="Dog with food" />
    <Title>No results</Title>
    <Text>Search for ingredients above!</Text>
  </Flex>
);

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  max-height: 360px;
  margin-top: 32px;
`;

const Title = styled.div`
  margin-top: 12px;
  margin-bottom: 4px;
  text-align: center;

  font-size: 26px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.black};
`;

const Text = styled.div`
  margin-top: 8px;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.darkGray};
`;

EmptyState.displayName = 'EmptyState';

export default EmptyState;
