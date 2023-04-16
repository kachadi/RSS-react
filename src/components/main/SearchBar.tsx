import { useState } from 'react';
import useActions from '../../hooks/useActions';
import useSearchValue from '../../hooks/useSearchValue';
import styles from './SearchBar.module.css';

function SearchBar() {
  const { searchValue } = useSearchValue();

  const [inputValue, setInputValue] = useState(searchValue);
  const { addSearchValueToStore } = useActions();

  const searchInputHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  };

  const searchFormHandler = (event: React.ChangeEvent<HTMLFormElement>): void => {
    event.preventDefault();
    addSearchValueToStore(inputValue);
  };

  return (
    <form className={styles.searchForm} onSubmit={searchFormHandler}>
      <div className='form-control'>
        <input
          id='search'
          type='text'
          placeholder='start typing a word'
          className={styles.searchInput}
          onChange={searchInputHandler}
          value={inputValue}
        />
      </div>
      <div className='form-action'>
        <button type='submit' className={styles.searchBtn}>
          search
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
