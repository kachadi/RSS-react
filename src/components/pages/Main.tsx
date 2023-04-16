import { CSSProperties, useState } from 'react';
import { GridLoader } from 'react-spinners';
import { useGetSearchItemsQuery } from '../../store/api/api';
import ItemsList from '../main/cards/ItemsList';
import SearchBar from '../main/SearchBar';
import styles from './Main.module.css';

const override: CSSProperties = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'block',
  margin: '0 auto',
};

function Main() {
  // const [isNotFound, setIsNotFound] = useState(false);
  // const [error, setError] = useState<string | null>(null);

  const [searchingValue, setSearchingValue] = useState<string>('');

  const { isLoading, data: items } = useGetSearchItemsQuery(searchingValue);

  const getSearchingValue = (searchValue: string) => {
    setSearchingValue(searchValue);
  };

  return (
    <div className='wrapper'>
      <SearchBar
        onGetSearchingValue={getSearchingValue}
      />

      {/* {error && (
        <div className={styles.noResultsWrapper}>
          <p className={styles.noResultsMsg}>
            Opps! Something went wrong 😱
            <br />
            Error message: <span>{error}</span>
          </p>
        </div>
      )}

      {!error && isNotFound && (
        <div className={styles.noResultsWrapper}>
          <p className={styles.noResultsMsg}>No Results Found 😔</p>
        </div>
      )} */}

      {isLoading ? (
        <GridLoader
          color='#f9bc60'
          loading={isLoading}
          cssOverride={override}
          size={10}
          aria-label='Loading Spinner'
          data-testid='loader'
        />
      ) : (
        <ItemsList items={items} />
      )}
    </div>
  );
}

export default Main;
