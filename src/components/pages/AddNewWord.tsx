import { PureComponent } from 'react';
import { IItem } from '../../models/item.model';
import AddNewWordForm from '../add-new-word/AddNewWordForm';
import ItemsList from '../main/cards/ItemsList';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface AddNewWordProps {}

interface AddNewWordState {
  newItems: IItem[];
}

class AddNewWord extends PureComponent<AddNewWordProps, AddNewWordState> {
  constructor(props: AddNewWordProps) {
    super(props);
    this.state = {
      newItems: [
        {
          id: 0,
          beTitle: 'птушка',
          ltnTitle: 'ptuška',
          enTitle: 'bird',
          imagePath: './src/assets/img/cards-images/bird.png',
          soundPath: '',
          category: 'animals',
        },
      ],
    };
  }

  addNewWordHandler = (item: IItem) => {
    this.setState({ newItems: [...this.state.newItems, item] });
  };

  render() {
    const { newItems } = this.state;

    return (
      <div className='wrapper'>
        <AddNewWordForm onAddNewWord={this.addNewWordHandler} />
        <ItemsList items={newItems} />
      </div>
    );
  }
}

export default AddNewWord;
