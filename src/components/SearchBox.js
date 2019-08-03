import React from 'react';
import styled from 'styled-components';
import { Search } from 'react-feather';

const SearchBox = () => (
  <SearchBoxStyled>
    <SearchInputBox>
      <SearchIconStyled size={14} />
      <InputStyled name="search" type="text" placeholder="Search Recipes.." />
    </SearchInputBox>
  </SearchBoxStyled>
);

const SearchBoxStyled = styled.div`
  background: ${({ theme }) => theme.colors.lightGray};
  padding: 12px 24px;
`;

const SearchIconStyled = styled(Search)`
  color: ${({ theme }) => theme.colors.darkGray};
  margin-right: 12px;
`;

const SearchInputBox = styled.form`
  display: flex;
  height: 47px;
  border-radius: 8px;
  padding: 0 12px;
  /* display: flex; */
  align-items: center;
  background: ${({ theme }) => theme.colors.gray};
`;

const InputStyled = styled.input`
  font-weight: 600;
  font-size: 14px;
  /* background-color: transparent; */
  border: 0px;
  color:  ${({ theme }) => theme.colors.darkGray};
  margin: 0px;
  padding: 0px;
  width: 100%;
  text-overflow: ellipsis;
  flex-grow: 1;
  width: 100%;
  background: none;
  border: none;
  /* height: 47px;
  width: 100%;
  background: ${({ theme }) => theme.colors.gray}; */
  :focus {
    outline: none;
  }
`;

export default SearchBox;
