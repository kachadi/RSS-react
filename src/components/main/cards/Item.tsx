import { PureComponent } from 'react';
import './Item.css';

interface ItemProps {
  key: number;
  beTitle: string;
  ltnTitle: string;
  enTitle: string;
  imagePath: string;
  soundPath: string;
  category: string;
}

class Item extends PureComponent<ItemProps> {
  render() {
    const {
      enTitle,
      ltnTitle,
      beTitle,
      imagePath,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      soundPath,
      category,
    } = this.props;
    return (
      <li className='item-card_wrapper'>
        <div className='item-card'>
          <div className='front-side'>
            <img src={imagePath} className='item-card_image' alt={enTitle} />
            <div className='item-card_description'>
              <p className='item-card_text'>{beTitle}</p>
              <p className='item-card_text en'>{enTitle}</p>
              <p className='item-card_text ltn'>{ltnTitle}</p>
              <div className='item-card_controls'>
                <button
                  type='button'
                  aria-label='soundButton'
                  className='item-card_btn sound'
                  title='pronounce word'
                />
                <button
                  type='button'
                  aria-label='addButton'
                  className='item-card_btn add'
                  title='add word to learn'
                />
              </div>
              <p className='item-card_category'>{category}</p>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default Item;
