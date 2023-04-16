import { useState } from 'react';
import { IItemDescription } from '../../../models/item.model';
import { useGetWordDescriptionQuery } from '../../../store/api/word.api';
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

  const { data } = useGetWordDescriptionQuery(id);

  const clickItemHandler = () => {
    const fetchedItemDesc = data[0];
    setItemDescription(fetchedItemDesc);
    setIsItemDescriptionOpen(true);
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
