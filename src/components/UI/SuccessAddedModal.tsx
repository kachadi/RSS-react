import './SuccessAddedModal.css';

interface SuccessAddedModalProps {
  onAddModal: () => void;
}

function Backdrop(props: SuccessAddedModalProps) {
  return <div className='backdrop' onClick={props.onAddModal} />;
}

function Overlay(props: SuccessAddedModalProps) {
  return (
    <div className='modal'>
      <h2>Word succesfully added! 😊</h2>
      <button type='submit' onClick={props.onAddModal}>
        Cool!
      </button>
    </div>
  );
}

function SuccessAddedModal(props: SuccessAddedModalProps) {
  return (
    <>
      <Backdrop onAddModal={props.onAddModal} />
      <Overlay onAddModal={props.onAddModal} />
    </>
  );
}

export default SuccessAddedModal;
