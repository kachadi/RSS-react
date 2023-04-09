import { useState } from 'react';
import { IItem } from '../../models/item.model';
import ItemsList from '../main/cards/ItemsList';
import SearchBar from '../main/SearchBar';
import styles from './Main.module.css';

function Main() {
  const [isNotFound, setIsNotFound] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchingItems, setSearchingItems] = useState<IItem[]>([]);

  const addSearchingItems = (items: IItem[]) => {
    setSearchingItems(items);
  };

  return (
    <div className='wrapper'>
      <SearchBar
        onAddSearchingItems={addSearchingItems}
        setIsNotFound={setIsNotFound}
        setError={setError}
      />

      {error && (
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
      )}

      {!error && !isNotFound && <ItemsList items={searchingItems} />}
    </div>
  );
}

export default Main;
