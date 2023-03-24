import { PureComponent } from 'react';
import Item from './Item';
import './ItemsList.css';
import { IItem } from '../../../models/item.model';

interface ItemListProps {
  items: IItem[];
}

class ItemsList extends PureComponent<ItemListProps> {
  // searchingItems: IItem[] = mockItems.slice(0, 2);

  render() {
    const { items } = this.props;
    return (
      <ul className='items'>
        {items.map((item) => (
          <Item
            key={item.id}
            beTitle={item.beTitle}
            ltnTitle={item.ltnTitle}
            enTitle={item.enTitle}
            imagePath={item.imagePath}
            soundPath={item.soundPath}
            category={item.category}
          />
        ))}
      </ul>
    );
  }
}

export default ItemsList;
