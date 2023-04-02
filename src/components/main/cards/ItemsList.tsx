import Item from './Item';
import styles from './ItemsList.module.css';
import { IItem } from '../../../models/item.model';

interface ItemListProps {
  items: IItem[];
}

function ItemsList(props: ItemListProps) {
  const { items } = props;

  return (
    <ul className={styles.items}>
      {items.map((item) => (
        <Item
          key={item.id}
          beTitle={item.beTitle}
          ltnTitle={item.ltnTitle}
          enTitle={item.enTitle}
          imagePath={item.imagePath}
          soundPath={item.soundPath}
          category={item.category}
        />
      ))}
    </ul>
  );
}
export default ItemsList;
