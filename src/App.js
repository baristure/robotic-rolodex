import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      heroes: [],
      searchField: ''
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ heroes: users }));
  }

  render() {
    const { heroes, searchField } = this.state;
    const filteredHeroes = heroes.filter(heroes =>
      heroes.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <SearchBox
        placeholder='Search Heroes' 
        handleChange={e=>this.setState({searchField : e.target.value})}
        />
        <CardList heroes={filteredHeroes} />
      </div>
    );
  }
}

export default App;
