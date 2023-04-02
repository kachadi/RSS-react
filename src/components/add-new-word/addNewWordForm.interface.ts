import { FieldError, RegisterOptions, UseFormRegister } from 'react-hook-form';

export interface IAddNewWordFormInputs {
  enWord: string;
  beWord: string;
  ltnWord: string;
  date: string;
  category: string;
  image: FileList;
  consent: boolean;
  newsletter: boolean;
}

export interface IFormInputProps {
  register: UseFormRegister<IAddNewWordFormInputs>;
  validationSchema: RegisterOptions;
  name: 'ltnWord' | 'image' | 'enWord' | 'beWord' | 'date' | 'category' | 'consent' | 'newsletter';
  label?: string;
  id: string;
  type: string;
  error?: FieldError;
  autoComplete?: string;
  placeholder?: string;
}
