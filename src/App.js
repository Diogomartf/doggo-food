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
      recentSearches: ['pesto', 'cheese', 'pasta', 'basil'],
      inputFocus: false
    };
  }

  handleChange = e => {
    this.setState({ searchText: e.target.value });
  };

  handleOnFocus = () => {
    this.setState({ inputFocus: true });
  };

  handleOnBlur = () => {
    this.setState({ inputFocus: false });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { searchText } = this.state;
    const hasMoreThan3Chars = searchText.length > 2;

    if (hasMoreThan3Chars)
      api.recipes
        .list({ ingredients: searchText })
        .then(response => this.setState({ recipes: response.data.results }))
        .catch(response => console.log('error:', response));
  };

  render() {
    const { inputFocus, recentSearches } = this.state;

    return (
      <div>
        <Header
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          searchText={this.state.searchText}
          handleOnFocus={this.handleOnFocus}
          handleOnBlur={this.handleOnBlur}
          inputFocus={inputFocus}
          recentSearches={recentSearches}
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
