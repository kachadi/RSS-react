import styles from './Paginate.module.css';

interface IPaginate {
  postsPerPage: number;
  totalPosts: number;
  currentPage: number;
  paginate: (pageNumber: number) => void;
  previousPage: () => void;
  nextPage: () => void;
}

function Paginate({
  postsPerPage,
  totalPosts,
  currentPage,
  paginate,
  previousPage,
  nextPage,
}: IPaginate) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i += 1) {
    pageNumbers.push(i);
  }

  return (
    <div className={styles.paginationContainer}>
      <ul className={styles.pagination}>
        <li className={styles.pageNumber}>
          <span onClick={previousPage}>&#8249;</span>
        </li>
        {pageNumbers.map((number, i) => (
          <li key={number}>
            <div
              onClick={() => paginate(number)}
              className={
                currentPage === (i + 1) ? `${styles.pageNumber} ${styles.active}` : `${styles.pageNumber}`
              }
            >
              {number}
            </div>
          </li>
        ))}
        <li className={styles.pageNumber}>
          <span onClick={nextPage}>&#8250;</span>
        </li>
      </ul>
    </div>
  );
}

export default Paginate;
