import mockItems from '../../constants/mockData';
import { IItem } from '../../models/item.model';
import ItemsList from '../main/cards/ItemsList';
import SearchBar from '../main/SearchBar';


function Main() {
  const searchingItems: IItem[] = mockItems.slice(0, 8);

  return (
    <div className='wrapper'>
      <SearchBar />
      <ItemsList items={searchingItems} />
    </div>
  );
}

export default Main;
