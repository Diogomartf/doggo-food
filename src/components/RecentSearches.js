import React from 'react';
import styled from 'styled-components';
import { X } from 'react-feather';

const RecentSearches = ({ searches }) => (
  <SearchWrapper>
    <Container>
      {searches.map(search => (
        <SearchItem>
          <div>{search}</div>
          <CloseIcon sizer={12} />
        </SearchItem>
      ))}
    </Container>
  </SearchWrapper>
);

const Container = styled.div`
  padding: 0 24px 12px 24px;
`;

const SearchItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 38px;
  padding: 0 12px;

  background-color: ${props => props.theme.colors.lightGray};
  cursor: pointer;

  :hover {
    background-color: ${props => props.theme.colors.gray};
    border-radius: 4px;
  }
`;

const SearchWrapper = styled.div`
  position: absolute;
  width: 100%;
  background-color: ${props => props.theme.colors.lightGray};
`;

const CloseIcon = styled(X)`
  color: ${props => props.theme.colors.darkGray};
`;

export default RecentSearches;
