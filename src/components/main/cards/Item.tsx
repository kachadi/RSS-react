import { useState } from 'react';
import { fetchItemDescription } from '../../../api/fetchAPI';
import { IItemDescription } from '../../../models/item.model';
import styles from './Item.module.css';
import ItemDescriptionModal from './ItemDescriptionModal';

interface ItemProps {
  key: string;
  id: string;
  beTitle: string;
  ltnTitle: string;
  enTitle: string;
  imagePath: string;
  soundPath: string;
  category: string;
}

function Item(props: ItemProps) {
  const { id, enTitle, ltnTitle, beTitle, imagePath, category } = props;

  const [isItemDescriptionOpen, setIsItemDescriptionOpen] = useState(false);
  const [itemDescription, setItemDescription] = useState<IItemDescription>();

  const closeModal = () => {
    setIsItemDescriptionOpen(false);
  };

  const clickItemHandler = async () => {
    try {
      const fetchedItemDescription = await fetchItemDescription(id);
      setItemDescription(fetchedItemDescription);
      setIsItemDescriptionOpen(true);
    } catch (error) {
      // eslint-disable-next-line no-console
      if (error instanceof Error) console.log(`Error: ${error.message}`);
    }
  };

  return (
    <>
      {isItemDescriptionOpen && itemDescription && (
        <ItemDescriptionModal itemDescription={itemDescription} onCloseModal={closeModal} />
      )}
      <li className={styles.itemCardWrapper}>
        <div className={styles.itemCard} onClick={clickItemHandler}>
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
    </>
  );
}

export default Item;
