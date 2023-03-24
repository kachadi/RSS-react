import { PureComponent } from 'react';
import AddNewWordForm from '../add-new-word/AddNewWordForm';
import ItemsList from '../main/cards/ItemsList';

class AddNewWord extends PureComponent {
  newItems = [
    {
      id: 0,
      beTitle: 'птушка',
      ltnTitle: 'ptuška',
      enTitle: 'bird',
      imagePath: './src/assets/img/cards-images/bird.png',
      soundPath: '',
      category: 'animals',
    },
  ];

  render() {
    return (
      <div className='wrapper'>
        <AddNewWordForm />
        <ItemsList items={this.newItems} />
      </div>
    );
  }
}

export default AddNewWord;
