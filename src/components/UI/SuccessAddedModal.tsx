import { createPortal } from 'react-dom';
import './SuccessAddedModal.css';

interface SuccessAddedModalProps {
  onCloseModal: () => void;
}

function Backdrop(props: SuccessAddedModalProps) {
  return (
    <div className='backdrop' onClick={props.onCloseModal}>
      <div className='blur' />
    </div>
  );
}

function Overlay(props: SuccessAddedModalProps) {
  return (
    <div className='modal'>
      <h2>Word succesfully added! 😊</h2>
      <button type='button' onClick={props.onCloseModal}>
        Cool!
      </button>
    </div>
  );
}

function SuccessAddedModal(props: SuccessAddedModalProps) {
  return (
    <>
      {createPortal(
        <Backdrop onCloseModal={props.onCloseModal} />,
        document.getElementById('backdrop-root') as HTMLElement,
      )}
      {createPortal(
        <Overlay onCloseModal={props.onCloseModal} />,
        document.getElementById('overlay-root') as HTMLElement,
      )}
    </>
  );
}

export { Backdrop, SuccessAddedModal };
