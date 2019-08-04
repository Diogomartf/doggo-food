import React from 'react';
import Header from './components/Header';
import Recipes from './components/Recipes';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    };
  }

  handleChange = e => {
    this.setState({ searchText: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.searchText.length > 2) console.log('e.target', e.target);
  };

  render() {
    return (
      <div>
        <Header
          ref={this.searchInput}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          searchText={this.state.searchText}
        />
        <Recipes searchText={this.state.searchText} />
      </div>
    );
  }
}

export default App;
