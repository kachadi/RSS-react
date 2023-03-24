import { createRef, Component } from 'react';
import CATEGORIES from '../../constants/categories';
import './AddNewWordForm.css';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface AddNewWordFormProps {}

class AddNewWordForm extends Component<AddNewWordFormProps> {
  enWordInputRef = createRef<HTMLInputElement>();

  beWordInputRef = createRef<HTMLInputElement>();

  ltnWordInputRef = createRef<HTMLInputElement>();

  dateInputRef = createRef<HTMLInputElement>();

  categorySelectRef = createRef<HTMLSelectElement>();

  uploadImageRef = createRef<HTMLInputElement>();

  consentDataRef = createRef<HTMLInputElement>();

  submitHandler = (event: React.ChangeEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const enteredEnWord = this.enWordInputRef.current?.value;
    const enteredBeWord = this.beWordInputRef.current?.value;
    const enteredLtnWord = this.ltnWordInputRef.current?.value;
    const enteredDate = this.dateInputRef.current?.value;
    const enteredCategory = this.categorySelectRef.current?.value;
    const uploadedImage = this.uploadImageRef.current?.value;
    const isConsentData = this.consentDataRef.current?.checked;

    console.log(
      enteredBeWord,
      enteredEnWord,
      enteredLtnWord,
      enteredDate,
      enteredCategory,
      uploadedImage,
      isConsentData,
    );
  };

  render() {
    return (
      <div className='form_wrapper'>
        <h1>Add a new word</h1>
        <form className='form' onSubmit={this.submitHandler}>
          <div className='form_controls'>
            <label htmlFor='en_word'>Word in English:</label>
            <input
              id='en_word'
              type='text'
              placeholder='E.g. Bird'
              ref={this.enWordInputRef}
            />
            <label htmlFor='be_word'>Word in Belarusian:</label>
            <input
              id='be_word'
              type='text'
              placeholder='E.g. Птушка'
              ref={this.beWordInputRef}
            />
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
              placeholder='E.g. Ptuška'
              ref={this.ltnWordInputRef}
            />
            <label htmlFor='date'>Date:</label>
            <input
              id='date'
              type='date'
              className='date-input'
              ref={this.dateInputRef}
            />

            <label htmlFor='category'>Select a category:</label>
            <select id='category' ref={this.categorySelectRef}>
              {CATEGORIES.map((category) => (
                <option
                  key={category}
                  value={category}
                  className='select-option'
                >
                  {category}
                </option>
              ))}
            </select>

            <label htmlFor='upload-image'>Upload image:</label>
            <input
              type='file'
              id='upload-image'
              className='upload-input'
              ref={this.uploadImageRef}
            />

            <label className='checkbox-container'>
              I consent to my personal data:
              <input
                type='checkbox'
                defaultChecked={false}
                ref={this.consentDataRef}
              />
              <span className='checkmark' />
            </label>

            <div className='switch-container'>
              <p>I want to recieve a newsletter:</p>
              <div className='btn-switch'>
                <input
                  type='radio'
                  id='yes'
                  name='switch'
                  className='btn-switch__radio btn-switch__radio_yes'
                />
                <input
                  type='radio'
                  checked
                  id='no'
                  name='switch'
                  className='btn-switch__radio btn-switch__radio_no'
                />
                <label
                  htmlFor='yes'
                  className='btn-switch__label btn-switch__label_yes'
                >
                  <span className='btn-switch__txt'>Yes</span>
                </label>
                <label
                  htmlFor='no'
                  className='btn-switch__label btn-switch__label_no'
                >
                  <span className='btn-switch__txt'>No</span>
                </label>
              </div>
            </div>
          </div>

          <div className='form_actions'>
            <input
              type='submit'
              value='Submit'
              className='form_btns non-active'
            />
            <input type='reset' value='Reset' className='form_btns' />
          </div>
        </form>
      </div>
    );
  }
}

export default AddNewWordForm;
