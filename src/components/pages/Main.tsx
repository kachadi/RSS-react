import { PureComponent } from 'react';
import ItemsList from '../main/cards/ItemsList';
import SearchBar from '../main/SearchBar';

class Main extends PureComponent {
  render() {
    return (
      <div className="wrapper">
        <SearchBar />
        <ItemsList />
      </div>
    );
  }
}

export default Main;
