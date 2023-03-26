import { createRef, Component } from 'react';
import CATEGORIES from '../../constants/categories';
import FORM_ERROR_MESSAGES from '../../constants/errorMsgs';
import { IItem } from '../../models/item.model';
import './AddNewWordForm.css';

const falsyFormErrors = {
  enWord: false,
  beWord: false,
  ltnWord: false,
  date: false,
  image: false,
  consent: false,
};

interface AddNewWordFormProps {
  onAddNewWord: (item: IItem) => void;
}

interface Errors {
  enWord: boolean | string;
  beWord: boolean | string;
  ltnWord: boolean | string;
  date: boolean | string;
  image: boolean | string;
  consent: boolean | string;
}

interface AddNewWordFormState {
  formErrors: Errors;
  // submitDisabled: boolean;
}

class AddNewWordForm extends Component<AddNewWordFormProps, AddNewWordFormState> {
  enWordInputRef = createRef<HTMLInputElement>();

  beWordInputRef = createRef<HTMLInputElement>();

  ltnWordInputRef = createRef<HTMLInputElement>();

  dateInputRef = createRef<HTMLInputElement>();

  categorySelectRef = createRef<HTMLSelectElement>();

  uploadImageRef = createRef<HTMLInputElement>();

  consentDataRef = createRef<HTMLInputElement>();

  newsletterRef = createRef<HTMLInputElement>();

  constructor(props: AddNewWordFormProps) {
    super(props);
    this.state = {
      formErrors: {
        ...falsyFormErrors,
      },
      // submitDisabled: true,
    };
  }

  validate = () => {
    const errors: Errors = {
      ...falsyFormErrors,
    };

    let isValid = true;

    if (this.enWordInputRef.current && this.enWordInputRef.current.value.length < 2) {
      errors.enWord = FORM_ERROR_MESSAGES.words;
      isValid = false;
    }

    if (this.beWordInputRef.current && this.beWordInputRef.current.value.length < 2) {
      errors.beWord = FORM_ERROR_MESSAGES.words;
      isValid = false;
    }

    if (this.ltnWordInputRef.current && this.ltnWordInputRef.current.value.length < 2) {
      errors.ltnWord = FORM_ERROR_MESSAGES.words;
      isValid = false;
    }

    if (this.uploadImageRef.current && this.uploadImageRef.current.files) {
      if (
        !this.uploadImageRef.current.files.length ||
        !this.uploadImageRef.current.files[0].type.includes('image/')
      ) {
        errors.image = FORM_ERROR_MESSAGES.image;
        isValid = false;
      }
    }

    if (this.dateInputRef.current) {
      const date = new Date(this.dateInputRef.current.value);
      const today = new Date();

      if (date.toString() === 'Invalid Date' || date > today) {
        errors.date = FORM_ERROR_MESSAGES.date;
        isValid = false;
      }
    }

    if (this.consentDataRef.current && !this.consentDataRef.current.checked) {
      errors.consent = FORM_ERROR_MESSAGES.consent;
      isValid = false;
    }

    this.setState({ formErrors: errors });

    return isValid;
  };

  submitHandler = (event: React.ChangeEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (this.validate()) {
      const enteredEnWord = this.enWordInputRef.current?.value;
      const enteredBeWord = this.beWordInputRef.current?.value;
      const enteredLtnWord = this.ltnWordInputRef.current?.value;
      const enteredCategory = this.categorySelectRef.current?.value;
      const uploadedImage = this.uploadImageRef.current?.files;

      const transformedUploadedImage = uploadedImage ? URL.createObjectURL(uploadedImage[0]) : '';

      const newItem: IItem = {
        id: Math.random(),
        beTitle: enteredBeWord || '',
        ltnTitle: enteredLtnWord || '',
        enTitle: enteredEnWord || '',
        imagePath: transformedUploadedImage,
        soundPath: '',
        category: enteredCategory || '',
      };

      this.props.onAddNewWord(newItem);

      event.target.reset();
      // this.setState({ submitDisabled: true });
    }
  };

  resetHandler = (event: React.ChangeEvent<HTMLFormElement>) => {
    this.setState({
      formErrors: {
        ...falsyFormErrors,
      },
    });
    event.target.reset();
  };

  render() {
    return (
      <div className='form_wrapper'>
        <h1>Add a new word</h1>
        <form className='form' onSubmit={this.submitHandler} onReset={this.resetHandler}>
          <div className='form_controls'>
            <label htmlFor='en_word'>Word in English:</label>
            <input
              id='en_word'
              type='text'
              autoComplete='off'
              placeholder='E.g. Bird'
              ref={this.enWordInputRef}
              className={this.state.formErrors.enWord ? 'input error' : 'input'}
            />
            <div className={this.state.formErrors.enWord ? 'error-msg' : 'error-msg unvisible'}>
              {this.state.formErrors.enWord}
            </div>

            <label htmlFor='be_word'>Word in Belarusian:</label>
            <input
              id='be_word'
              type='text'
              autoComplete='off'
              placeholder='E.g. Птушка'
              className={this.state.formErrors.beWord ? 'input error' : 'input'}
              ref={this.beWordInputRef}
            />
            <div className={this.state.formErrors.beWord ? 'error-msg' : 'error-msg unvisible'}>
              {this.state.formErrors.beWord}
            </div>

            <label htmlFor='ltn_word'>
              Word in{' '}
              <a
                href='https://en.wikipedia.org/wiki/Belarusian_Latin_alphabet'
                target='_blank'
                rel='noopener noreferrer'
                title='see about'
              >
                Belarusian Latin alphabet
              </a>{' '}
              (Łacinka):
            </label>
            <input
              id='ltn_word'
              type='text'
              autoComplete='off'
              placeholder='E.g. Ptuška'
              className={this.state.formErrors.ltnWord ? 'input error' : 'input'}
              ref={this.ltnWordInputRef}
            />
            <div className={this.state.formErrors.ltnWord ? 'error-msg' : 'error-msg unvisible'}>
              {this.state.formErrors.ltnWord}
            </div>

            <label htmlFor='date'>Date:</label>
            <input
              id='date'
              type='date'
              className={this.state.formErrors.date ? 'input error' : 'input'}
              ref={this.dateInputRef}
            />
            <div className={this.state.formErrors.date ? 'error-msg' : 'error-msg unvisible'}>
              {this.state.formErrors.date}
            </div>

            <label htmlFor='category'>Select a category:</label>
            <select id='category' ref={this.categorySelectRef}>
              {CATEGORIES.map((category) => (
                <option key={category} value={category} className='select-option'>
                  {category}
                </option>
              ))}
            </select>

            <label htmlFor='upload-image'>Upload image:</label>
            <input
              type='file'
              id='upload-image'
              className={
                this.state.formErrors.image ? 'input upload-input error' : 'input upload-input'
              }
              ref={this.uploadImageRef}
            />
            <div className={this.state.formErrors.image ? 'error-msg' : 'error-msg unvisible'}>
              {this.state.formErrors.image}
            </div>

            <label className='checkbox-container'>
              I consent to my personal data:
              <input type='checkbox' defaultChecked={false} ref={this.consentDataRef} />
              <span className='checkmark' />
            </label>
            <div className={this.state.formErrors.consent ? 'error-msg' : 'error-msg unvisible'}>
              {this.state.formErrors.consent}
            </div>

            <div className='switch-container'>
              <p>I want to recieve a newsletter:</p>
              <div className='btn-switch'>
                <input
                  type='radio'
                  id='yes'
                  name='switch'
                  className='btn-switch__radio btn-switch__radio_yes'
                  ref={this.newsletterRef}
                />
                <input
                  type='radio'
                  checked
                  id='no'
                  name='switch'
                  className='btn-switch__radio btn-switch__radio_no'
                />
                <label htmlFor='yes' className='btn-switch__label btn-switch__label_yes'>
                  <span className='btn-switch__txt'>Yes</span>
                </label>
                <label htmlFor='no' className='btn-switch__label btn-switch__label_no'>
                  <span className='btn-switch__txt'>No</span>
                </label>
              </div>
            </div>
          </div>

          <div className='form_actions'>
            <input
              type='submit'
              value='Submit'
              className='form_btns'
              // disabled={this.state.submitDisabled}
            />
            <input type='reset' value='Reset' className='form_btns' />
          </div>
        </form>
      </div>
    );
  }
}

export default AddNewWordForm;
