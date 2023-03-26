import { PureComponent } from 'react';
import './SuccessAddedModal.css';

interface SuccessAddedModalProps {
  onAddModal: () => void;
}

class Backdrop extends PureComponent<SuccessAddedModalProps> {
  render() {
    return <div className='backdrop' onClick={this.props.onAddModal} />;
  }
}

class Overlay extends PureComponent<SuccessAddedModalProps> {
  render() {
    return (
      <div className='modal'>
        <h2>Word succesfully added! 😊</h2>
        <button type='submit' onClick={this.props.onAddModal}>
          Cool!
        </button>
      </div>
    );
  }
}

class SuccessAddedModal extends PureComponent<SuccessAddedModalProps> {
  render() {
    return (
      <>
        <Backdrop onAddModal={this.props.onAddModal} />
        <Overlay onAddModal={this.props.onAddModal} />
      </>
    );
  }
}

export default SuccessAddedModal;
