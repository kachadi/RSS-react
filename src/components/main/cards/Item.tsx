import { Component } from 'react';
import './Item.css'

interface ItemProps {
  key: number;
  beTitle: string;
  ltnTitle: string;
  enTitle: string;
  imagePath: string;
  soundPath: string;
}

class Item extends Component<ItemProps> {

  render() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { enTitle, ltnTitle, beTitle, imagePath, soundPath} = this.props;
    return (
      <li className='item-card_wrapper'>
        <div className='item-card'>
          <div className='front-side'>
            <img src={imagePath} className='item-card_image'/>
            <div className='item-card_description'>
              <p className='item-card_text'>{beTitle}</p>
              <p className='item-card_text en' >{enTitle}</p>
              <p className='item-card_text ltn'>{ltnTitle}</p>
              <div className='item-card_controls'>
                <button type="button" className='item-card_btn sound' title='pronounce word'></button>
                <button type="button" className='item-card_btn add' title='add word to learn'></button>
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default Item;