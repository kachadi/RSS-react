import { PureComponent } from 'react';
import mockItems from '../../constants/mockData';
import { IItem } from '../../models/item.model';
import ItemsList from '../main/cards/ItemsList';
import SearchBar from '../main/SearchBar';

class Main extends PureComponent {
  searchingItems: IItem[] = mockItems.slice(0, 8);

  render() {
    return (
      <div className='wrapper'>
        <SearchBar />
        <ItemsList items={this.searchingItems} />
      </div>
    );
  }
}

export default Main;
