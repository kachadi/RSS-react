import { CSSProperties } from 'react';
import { GridLoader } from 'react-spinners';
import useSearchValue from '../../hooks/useSearchValue';
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

  const { searchValue } = useSearchValue();
  const {
    isLoading,
    data: items,
    isSuccess,
    isFetching,
    isError,
  } = useGetSearchItemsQuery(searchValue);

  return (
    <div className='wrapper'>
      <SearchBar />

      {isError && (
        <div className={styles.noResultsWrapper}>
          <p className={styles.noResultsMsg}>
            Opps! Something went wrong 😱
            <br />
            Error message: <span>{isError}</span>
          </p>
        </div>
      )}

      {/*       {!error && isNotFound && (
        <div className={styles.noResultsWrapper}>
          <p className={styles.noResultsMsg}>No Results Found 😔</p>
        </div>
      )}  */}

      {isLoading ||
        (isFetching && (
          <GridLoader
            color='#f9bc60'
            loading={isLoading}
            cssOverride={override}
            size={10}
            aria-label='Loading Spinner'
            data-testid='loader'
          />
        ))}
      {isSuccess && !isFetching && <ItemsList items={items} />}
    </div>
  );
}

export default Main;
