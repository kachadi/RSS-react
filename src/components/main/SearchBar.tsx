import { useEffect, useState } from 'react';
import styles from './SearchBar.module.css';

interface SearchBarProps {
  onGetSearchingValue: (searchValue: string) => void;
}

function SearchBar(props: SearchBarProps) {
  const [inputValue, setInputValue] = useState('');

  // const [searchValue, setSearchValue] = useState(inputValue);

  // const [isLoaded, setIsLoaded] = useState(false);

  // useEffect(() => {

  // }, [searchValue]);

  const searchInputHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  };

  const searchFormHandler = (event: React.ChangeEvent<HTMLFormElement>): void => {
    event.preventDefault();
    props.onGetSearchingValue(inputValue);
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
