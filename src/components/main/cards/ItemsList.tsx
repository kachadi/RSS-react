import { Component } from 'react';
import Item from './Item';
import './ItemsList.css';
import { IItem } from '../../../models/item.model';
import { mockItems } from '../../../constants/mockData';

class ItemsList extends Component {
  searchingItems: IItem[] = mockItems.slice(0,8);

  render() {
    return (
        <ul className='items'>
          {this.searchingItems.map((item) => (
            <Item
              key={item.id}
              beTitle={item.beTitle}
              ltnTitle={item.ltnTitle}
              enTitle={item.enTitle}
              imagePath={item.imagePath}
              soundPath={item.soundPath}
            />
          ))}
        </ul>
    );
  }
}

export default ItemsList;
