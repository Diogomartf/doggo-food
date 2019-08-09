import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Search } from 'react-feather';

const SearchBox = ({ handleSubmit, handleChange, searchText }) => (
  <SearchBoxStyled>
    <SearchInputForm onSubmit={handleSubmit}>
      <SearchIconStyled size={18} />
      <InputStyled
        type="text"
        placeholder="Search Recipes.."
        value={searchText}
        onChange={e => handleChange(e.target.value)}
      />
    </SearchInputForm>
  </SearchBoxStyled>
);

const SearchBoxStyled = styled.div`
  padding: 12px 24px;
  background: ${({ theme }) => theme.colors.lightGray};
`;

const SearchInputForm = styled.form`
  display: flex;
  align-items: center;
  height: 47px;
  padding: 0 12px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.gray};
`;

SearchInputForm.displayName = 'SearchInputForm';

const SearchIconStyled = styled(Search)`
  margin-right: 12px;
  color: ${({ theme }) => theme.colors.darkGray};
`;

const InputStyled = styled.input`
  width: 100%;
  border: none;
  background: none;
  font-weight: 600;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.darkGray};

  :focus {
    outline: none;
  }
`;
InputStyled.displayName = 'InputStyled';

SearchBox.propTypes = {
  searchText: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default SearchBox;
