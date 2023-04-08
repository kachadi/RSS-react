import { createPortal } from 'react-dom';
import { IItemDescription } from '../../../models/item.model';
import { Backdrop } from '../../UI/SuccessAddedModal';
import ItemDescription from './ItemDescription';

interface ItemDescriptionModalProps {
  itemDescription: IItemDescription;
  onCloseModal: () => void;
}

function ItemDescriptionModal(props: ItemDescriptionModalProps) {
  return (
    <>
      {createPortal(
        <Backdrop onCloseModal={props.onCloseModal} />,
        document.getElementById('backdrop-root') as HTMLElement,
      )}
      {createPortal(
        <ItemDescription
          itemDescription={props.itemDescription}
          onCloseModal={props.onCloseModal}
        />,
        document.getElementById('overlay-root') as HTMLElement,
      )}
    </>
  );
}

export default ItemDescriptionModal;
