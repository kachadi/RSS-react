import { useState } from 'react';
import Item from './Item';
import styles from './ItemsList.module.css';
import { IItem } from '../../../models/item.model';
import Paginate from '../../UI/Paginate';

interface ItemListProps {
  items: IItem[];
}

const cardsOnPage = 8;

function ItemsList(props: ItemListProps) {
  const { items } = props;
  const [currentPage, setCurrentPage] = useState(1);

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== Math.ceil(items.length / cardsOnPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastPost = currentPage * cardsOnPage;
  const indexOfFirstPost = indexOfLastPost - cardsOnPage;
  const currentCards = items.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
      <ul className={styles.items} data-testid='cards'>
        {currentCards.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            beTitle={item.beTitle}
            ltnTitle={item.ltnTitle}
            enTitle={item.enTitle}
            imagePath={`https://mock-server-api-seven.vercel.app/${item.imagePath}`}
            soundPath={item.soundPath}
            category={item.category}
          />
        ))}
      </ul>
      {items.length > cardsOnPage && (
        <div className={styles.paginationWrapper}>
          <Paginate
            postsPerPage={cardsOnPage}
            totalPosts={items.length}
            currentPage={currentPage}
            paginate={paginate}
            previousPage={previousPage}
            nextPage={nextPage}
          />
        </div>
      )}
    </>
  );
}
export default ItemsList;
