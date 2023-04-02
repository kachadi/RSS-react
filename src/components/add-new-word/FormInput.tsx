import { FieldError, UseFormRegister } from 'react-hook-form';
import { IAddNewWordFormInputs } from './addNewWordForm.interface';
import styles from './AddNewWordForm.module.css';

interface FormInputProps {
  register: UseFormRegister<IAddNewWordFormInputs> ;
  label?: string;
  id: string;
  type: string;
  error: FieldError | undefined;
  autoComplete?: string;
  placeholder?: string;
}

export function FormInput(props: FormInputProps) {
  const { register, label, id, type, error, ...inputProps } = props;

  let labelTag;

  if (id === 'ltnWord') {
    labelTag = (
      <label htmlFor={id}>
        {' '}
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
    );
  } else {
    labelTag = <label htmlFor={id}>{label}</label>;
  }

  return (
    <>
      {labelTag}
      <input
        {...register}
        id={id}
        type={type}
        {...inputProps}
        className={error ? `${styles.input} ${styles.error}` : `${styles.input}`}
      />
      <div className={error ? `${styles.errorMsg}` : `${styles.errorMsg} ${styles.unvisible}`}>
        {error?.message}
      </div>
    </>
  );
}

export default FormInput;
