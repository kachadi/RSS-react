import styles from './Item.module.css';

interface ItemProps {
  key: number;
  beTitle: string;
  ltnTitle: string;
  enTitle: string;
  imagePath: string;
  soundPath: string;
  category: string;
}

function Item(props: ItemProps) {
  const {
    enTitle,
    ltnTitle,
    beTitle,
    imagePath,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    soundPath,
    category,
  } = props;
  return (
    <li className={styles.itemCardWrapper}>
      <div className={styles.itemCard}>
        <div className={styles.frontSide}>
          <img src={imagePath} className={styles.itemCardImage} alt={enTitle} />
          <div className={styles.itemCardDescription}>
            <p className={styles.itemCardText}>{beTitle}</p>
            <p className={`${styles.itemCardText} ${styles.en}`}>{enTitle}</p>
            <p className={`${styles.itemCardText} ${styles.ltn}`}>{ltnTitle}</p>
            <div className={styles.itemCardControls}>
              <button
                type='button'
                aria-label='soundButton'
                className={`${styles.itemCardBtn} ${styles.sound}`}
                title='pronounce word'
              />
              <button
                type='button'
                aria-label='addButton'
                className={`${styles.itemCardBtn} ${styles.add}`}
                title='add word to learn'
              />
            </div>
            <p className={styles.itemCardCategory}>{category}</p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Item;
