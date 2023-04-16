import useFormItems from '../../hooks/useFormItems';
import AddNewWordForm from '../add-new-word/AddNewWordForm';
import ItemsList from '../main/cards/ItemsList';

function AddNewWord() {
  const { formItems } = useFormItems();

  return (
    <div className='wrapper'>
      <AddNewWordForm />
      <ItemsList items={formItems} />
    </div>
  );
}

export default AddNewWord;
