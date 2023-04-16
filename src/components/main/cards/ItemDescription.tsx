import { IItemDescription } from '../../../models/item.model';
import styles from './ItemDescription.module.css';

interface ItemDescriptionProps {
  itemDescription: IItemDescription;
  onCloseModal: () => void;
}

function ItemDescription(props: ItemDescriptionProps) {
  const { enTitle, ltnTitle, beTitle, imagePath, category, description, additional, examples } =
    props.itemDescription;

  return (
    <div className={`${styles.descModal} modal`}>
      <div className={styles.descriptionWrapper}>
        <img
          src={`https://mock-server-api-seven.vercel.app/${imagePath}`}
          className={styles.itemImage}
          alt={enTitle}
        />
        <div className={styles.descriptionContainer}>
          <div className={styles.category}>{category}</div>
          <div className={styles.titles}>
            <div className={styles.title}>{beTitle}</div>
            <div className={`${styles.title} ${styles.en}`}>{enTitle}</div>
            <div className={`${styles.title} ${styles.ltn}`}>{ltnTitle}</div>
          </div>

          <div className={styles.descTitle}>
            Description:<p className={styles.textDesc}>{description}</p>
          </div>

          <div className={styles.descTitle}>
            Other forms:
            <ul className={styles.descList}>
              {additional.map((item: string) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className={styles.descTitle}>
            Examples of using:
            <ul className={styles.descList}>
              {examples.map((item: string) => (
                <li key={item} className={styles.exampleListItem}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <button type='button' onClick={props.onCloseModal} className={styles.descBtn}>
            Cool!
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemDescription;
