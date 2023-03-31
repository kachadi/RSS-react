import { forwardRef, Fragment, LegacyRef, PureComponent } from 'react';

interface FormInputProps {
  label?: string;
  id: string;
  type: string;
  errorMessage: string | boolean;
  error: boolean;
  autoComplete?: string;
  innerRef?: LegacyRef<HTMLInputElement>;
}

class FormInput extends PureComponent<FormInputProps> {
  render() {
    const { label, id, type, errorMessage, error, innerRef, ...inputProps } = this.props;

    let labelTag;

    if (id === 'ltn_word') {
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
          ref={innerRef}
          id={id}
          type={type}
          {...inputProps}
          className={error ? 'input error' : 'input'}
        />
        <div className={error ? 'error-msg' : 'error-msg unvisible'}>{errorMessage}</div>
      </>
    );
  }
}

export default forwardRef<HTMLInputElement, FormInputProps>((props, ref) => (
  <FormInput innerRef={ref} {...props} />
));
