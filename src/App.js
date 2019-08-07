import React from 'react';
import Header from './components/Header';
import Recipes from './components/Recipes';
import api from './api';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      recipes: []
    };
  }

  handleChange = e => {
    this.setState({ searchText: e.target.value });
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
    return (
      <div>
        <Header
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          searchText={this.state.searchText}
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
