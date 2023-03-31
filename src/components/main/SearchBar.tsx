import { useEffect, useRef, useState } from 'react';
import styles from './SearchBar.module.css';

function SearchBar() {
  const [inputValue, setInputValue] = useState(localStorage.getItem('inputValue') || '');
  const inputValueRef: React.MutableRefObject<string> = useRef('');

  useEffect(() => {
    inputValueRef.current = inputValue;
  }, [inputValue]);

  useEffect(
    () => () => {
      localStorage.setItem('inputValue', inputValueRef.current);
    },
    [],
  );

  const searchInputHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  };

  const searchFormHandler = (event: React.ChangeEvent<HTMLFormElement>): void => {
    event.preventDefault();
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
