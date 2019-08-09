import React from 'react';
import Header from './components/Header';
import Recipes from './components/Recipes';
import api from './api';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      recipes: [],
      recentSearches: [],
      inputFocus: false
    };
  }

  handleChange = search => {
    this.setState({ searchText: search });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { searchText, recentSearches } = this.state;
    const hasMoreThan3Chars = searchText.length > 2;

    const updatedRecentSearches =
      recentSearches.length >= 5
        ? recentSearches.splice(1, 4).concat(searchText)
        : recentSearches.concat(searchText);

    if (hasMoreThan3Chars)
      api.recipes
        .list({ ingredients: searchText })
        .then(response =>
          this.setState({
            recipes: response.data.results,
            recentSearches: updatedRecentSearches
          })
        )
        .catch(response => console.log('error:', response));
  };

  onClickRecentSearch = search => {
    api.recipes
      .list({ ingredients: search })
      .then(response =>
        this.setState({
          recipes: response.data.results,
          searchText: search,
          inputFocus: false
        })
      )
      .catch(response => console.log('error:', response));
  };

  deleteRecentSearch = index => {
    const { recentSearches } = this.state;
    recentSearches.splice(index, 1);

    this.setState({ recentSearches: recentSearches });
  };

  render() {
    const { inputFocus, recentSearches } = this.state;

    return (
      <div>
        <Header
          inputFocus={inputFocus}
          recentSearches={recentSearches}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          searchText={this.state.searchText}
          handleOnFocus={this.handleOnFocus}
          handleOnBlur={this.handleOnBlur}
          deleteRecentSearch={this.deleteRecentSearch}
          onClickRecentSearch={this.onClickRecentSearch}
        />
        <Recipes
          recipes={this.state.recipes}
          searchText={this.state.searchText}
        />
      </div>
    );
  }
}

export default App;
