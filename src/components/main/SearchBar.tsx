import { useEffect, useRef, useState } from 'react';
import { fetchItems } from '../../api/fetchAPI';
import { IItem } from '../../models/item.model';
import styles from './SearchBar.module.css';

interface SearchBarProps {
  onAddSearchingItems: (items: IItem[]) => void;
}

function SearchBar(props: SearchBarProps) {
  const [inputValue, setInputValue] = useState(localStorage.getItem('inputValue') || '');

  const [searchValue, setSearchValue] = useState(inputValue);
  const inputValueRef: React.MutableRefObject<string> = useRef('');

  // const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    inputValueRef.current = inputValue;
  }, [inputValue]);

  useEffect(
    () => () => {
      localStorage.setItem('inputValue', inputValueRef.current);
    },
    [],
  );

  useEffect(() => {
    const fetchData = async () => {
      setIsLoaded(true);
      const result = await fetchItems(searchValue);
      props.onAddSearchingItems(result);
      setIsLoaded(false);
    };

    fetchData();
  }, [searchValue]);

  const searchInputHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  };

  const searchFormHandler = (event: React.ChangeEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setSearchValue(inputValue);
    setInputValue('');
  };

  return (
    <>
      {isLoaded && <div>Loading ...</div>}
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
    </>
  );
}

export default SearchBar;
