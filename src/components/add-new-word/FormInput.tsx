import { IFormInputProps } from './addNewWordForm.interface';
import styles from './AddNewWordForm.module.css';

export function FormInput(props: IFormInputProps) {
  const { register, name, label, id, type, error, validationSchema, ...inputProps } = props;

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
        {...register(name, validationSchema)}
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
