import { useState } from 'react';
import { IItem } from '../../models/item.model';
import AddNewWordForm from '../add-new-word/AddNewWordForm';
import ItemsList from '../main/cards/ItemsList';

function AddNewWord() {
  const [newItems, setNewItems] = useState<IItem[]>([]);

  const addNewWordHandler = (item: IItem) => {
    setNewItems((prevState) => [...prevState, item]);
  };

  return (
    <div className='wrapper'>
      <AddNewWordForm onAddNewWord={addNewWordHandler} />
      <ItemsList items={newItems} />
    </div>
  );
}

export default AddNewWord;
