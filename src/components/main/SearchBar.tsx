import { CSSProperties, useEffect, useRef, useState } from 'react';
import { GridLoader } from 'react-spinners';
import { fetchItems } from '../../api/fetchAPI';
import { IItem } from '../../models/item.model';
import styles from './SearchBar.module.css';

const override: CSSProperties = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'block',
  margin: '0 auto',
};

interface SearchBarProps {
  onAddSearchingItems: (items: IItem[]) => void;
  setIsNotFound: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
}

function SearchBar(props: SearchBarProps) {
  const [inputValue, setInputValue] = useState(localStorage.getItem('inputValue') || '');

  const [searchValue, setSearchValue] = useState(inputValue);
  const inputValueRef: React.MutableRefObject<string> = useRef('');

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
      props.setError(null);
      try {
        const result = await fetchItems(searchValue);

        if (result.length === 0) {
          props.setIsNotFound(true);
        } else {
          props.setIsNotFound(false);
        }
        props.onAddSearchingItems(result);
      } catch (error) {
        if (error instanceof Error) props.setError(error.message);
      }

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
      {isLoaded && (
        <GridLoader
          color='#f9bc60'
          loading={isLoaded}
          cssOverride={override}
          size={10}
          aria-label='Loading Spinner'
          data-testid='loader'
        />
      )}
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
