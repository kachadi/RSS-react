import { describe, it } from 'vitest';
import { act, fireEvent, render, screen } from '@testing-library/react';
import App from '../../App';
import styles from './AddNewWordForm.module.css';

const validFormValues = {
  enWord: 'Dog',
  beWord: 'Сабака',
  ltnWord: 'Sabaka',
  date: '2021-04-04',
  image: [new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' })],
  consent: true,
};

const emptyFormValues = {
  enWord: '',
  beWord: '',
  ltnWord: '',
  date: '',
  image: new File([], '', {}),
  consent: false,
};

const setup = () => {
  window.history.pushState({}, '', '/new-word');

  const utils = render(<App />);
  const form: HTMLFormElement = screen.getByRole('form', { name: '' });
  const enWordInput: HTMLInputElement = screen.getByLabelText('Word in English:');
  const beWordInput: HTMLInputElement = screen.getByLabelText('Word in Belarusian:');
  const ltnWordInput: HTMLInputElement = screen.getByLabelText(/Łacinka/i);
  const dateInput: HTMLInputElement = screen.getByLabelText('Date:');
  const categorySelect: HTMLSelectElement = screen.getByLabelText('Select a category:');
  const imageInput: HTMLInputElement = screen.getByLabelText('Upload image:');
  const consentInput: HTMLInputElement = screen.getByLabelText('I consent to my personal data:');
  const newsletterInput: HTMLInputElement = screen.getByLabelText('No');
  const submitInput: HTMLInputElement = screen.getByText('Submit');
  const resetInput: HTMLInputElement = screen.getByText('Reset');

  return {
    form,
    enWordInput,
    beWordInput,
    ltnWordInput,
    dateInput,
    categorySelect,
    imageInput,
    consentInput,
    newsletterInput,
    submitInput,
    resetInput,
    ...utils,
  };
};

describe('AddNewWordForm component', () => {
  it('renders the AddNewWordForm component and find all inputs', () => {
    const {
      form,
      enWordInput,
      beWordInput,
      ltnWordInput,
      dateInput,
      categorySelect,
      imageInput,
      consentInput,
      newsletterInput,
      submitInput,
      resetInput,
    } = setup();

    expect(form).toBeInTheDocument();
    expect(form).toHaveClass(styles.form);

    expect(enWordInput).toBeInTheDocument();
    expect(enWordInput).toHaveAttribute('type', 'text');
    expect(enWordInput).toHaveClass(styles.input);

    expect(beWordInput).toBeInTheDocument();
    expect(beWordInput).toHaveAttribute('type', 'text');
    expect(beWordInput).toHaveClass(styles.input);

    expect(ltnWordInput).toBeInTheDocument();
    expect(ltnWordInput).toHaveAttribute('type', 'text');
    expect(ltnWordInput).toHaveClass(styles.input);

    expect(dateInput).toBeInTheDocument();
    expect(dateInput).toHaveAttribute('type', 'date');
    expect(dateInput).toHaveClass(styles.input);

    expect(categorySelect).toBeInTheDocument();

    expect(imageInput).toBeInTheDocument();
    expect(imageInput).toHaveAttribute('type', 'file');
    expect(imageInput).toHaveClass(styles.input);

    expect(consentInput).toBeInTheDocument();
    expect(consentInput).toHaveAttribute('type', 'checkbox');
    expect(consentInput).not.toBeChecked();

    expect(newsletterInput).toBeInTheDocument();
    expect(newsletterInput).toHaveAttribute('type', 'radio');
    expect(newsletterInput).toBeChecked();

    expect(submitInput).toBeInTheDocument();
    expect(submitInput).toHaveAttribute('type', 'submit');
    expect(submitInput).toHaveClass(styles.formBtns);

    expect(resetInput).toBeInTheDocument();
    expect(resetInput).toHaveAttribute('type', 'reset');
    expect(resetInput).toHaveClass(styles.formBtns);
  });

  it('if the values passed to the form are valid, then the form should not contain error messages and be empty', async () => {
    const {
      enWordInput,
      beWordInput,
      ltnWordInput,
      dateInput,
      imageInput,
      consentInput,
      submitInput,
    } = setup();

    await act(async () => {
      fireEvent.change(enWordInput, { target: { value: validFormValues.enWord } });
      fireEvent.blur(enWordInput);

      fireEvent.change(beWordInput, { target: { value: validFormValues.beWord } });
      fireEvent.blur(beWordInput);

      fireEvent.change(ltnWordInput, { target: { value: validFormValues.ltnWord } });
      fireEvent.blur(ltnWordInput);

      fireEvent.change(dateInput, { target: { value: validFormValues.date } });
      fireEvent.blur(dateInput);

      fireEvent.change(imageInput, { target: { files: validFormValues.image } });
      fireEvent.blur(imageInput);

      fireEvent.click(consentInput);
      fireEvent.blur(consentInput);
    });

    expect(enWordInput.value).toBe(validFormValues.enWord);
    expect(beWordInput.value).toBe(validFormValues.beWord);
    expect(ltnWordInput.value).toBe(validFormValues.ltnWord);
    expect(dateInput.value).toBe(validFormValues.date);
    expect(imageInput.files).toBe(validFormValues.image);
    expect(consentInput.checked).toBe(validFormValues.consent);

    await act(async () => {
      fireEvent.click(submitInput);
      fireEvent.blur(submitInput);
    });

    setTimeout(() => {
      expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/Word succesfully added!/i);
      fireEvent.click(screen.getByText('Cool!'));
      expect(enWordInput.value).toBe(emptyFormValues.enWord);
      expect(beWordInput.value).toBe(emptyFormValues.beWord);
      expect(ltnWordInput.value).toBe(emptyFormValues.ltnWord);
      expect(dateInput.value).toBe(emptyFormValues.date);
      expect(consentInput.checked).toBe(emptyFormValues.consent);
    }, 500);
  });

  it('after clicking submit in an empty form, all required fields should have signatures with errors and styles should change', async () => {
    const {
      enWordInput,
      beWordInput,
      ltnWordInput,
      dateInput,
      imageInput,
      consentInput,
      submitInput,
      container,
    } = setup();

    await act(async () => {
      fireEvent.click(submitInput);
      fireEvent.blur(submitInput);
    });

    expect(enWordInput).toHaveClass(styles.error);
    expect(beWordInput).toHaveClass(styles.error);
    expect(ltnWordInput).toHaveClass(styles.error);
    expect(dateInput).toHaveClass(styles.error);
    expect(imageInput).toHaveClass(styles.error);
    expect(consentInput.checked).toBe(emptyFormValues.consent);
    expect(container.getElementsByClassName(styles.errorMsg).length).toBe(6);
  });
});
