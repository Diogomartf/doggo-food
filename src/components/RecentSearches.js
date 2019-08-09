import React, { useState } from 'react';
import styled from 'styled-components';
import { X, Menu } from 'react-feather';

const RecentSearches = ({ searches, deleteRecentSearch, onClick }) => {
  const [expand, setExpand] = useState(false);
  return (
    searches.length > 0 && (
      <SearchWrapper>
        <Container>
          <CollapseWrapper onClick={() => setExpand(!expand)}>
            <Menu size={13} />
            <CollapseTitle>Recent searches</CollapseTitle>
          </CollapseWrapper>
        </Container>
        {expand && (
          <Box>
            <Container>
              {searches.map((search, index) => (
                <SearchItem
                  key={index}
                  onClick={() => {
                    onClick(search);
                  }}
                >
                  <div>{search}</div>
                  <CloseIcon
                    sizer={12}
                    onClick={e => {
                      e.stopPropagation();
                      deleteRecentSearch(index);
                    }}
                  />
                </SearchItem>
              ))}
            </Container>
          </Box>
        )}
      </SearchWrapper>
    )
  );
};

const SearchWrapper = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colors.lightGray};
`;

const Container = styled.div`
  padding: 0 24px 12px 24px;
`;

const CollapseWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  cursor: pointer;
`;

const CollapseTitle = styled.div`
  margin-left: 4px;
  color: ${props => props.theme.colors.darkGray};
  text-transform: uppercase;
  font-size: 12px;
`;

const Box = styled.div`
  position: absolute;
  width: 100%;
  z-index: 1;
  background-color: ${props => props.theme.colors.lightGray};
`;

const CloseIcon = styled(X)`
  color: ${props => props.theme.colors.darkGray};
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

export default RecentSearches;
