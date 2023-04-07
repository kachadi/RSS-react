import { useState } from 'react';
import { IItem } from '../../models/item.model';
import ItemsList from '../main/cards/ItemsList';
import SearchBar from '../main/SearchBar';

function Main() {
  const [searchingItems, setSearchingItems] = useState<IItem[]>([]);

  const addSearchingItems = (items: IItem[]) => {
    setSearchingItems(items);
  };

  return (
    <div className='wrapper'>
      <SearchBar onAddSearchingItems={addSearchingItems} />
      <ItemsList items={searchingItems} />
    </div>
  );
}

export default Main;
