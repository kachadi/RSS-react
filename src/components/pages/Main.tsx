import { Component } from 'react';
import ItemsList from '../main/cards/ItemsList';
import SearchBar from '../main/SearchBar';

class Main extends Component {
  render() {
    return (
      <div className='wrapper'>
        <SearchBar></SearchBar>
        <ItemsList></ItemsList>
      </div>
    );
  }
}

export default Main;
