import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import CATEGORIES from '../../constants/categories';
import FORM_ERROR_MESSAGES from '../../constants/errorMsgs';
import INPUTS from '../../constants/inputs';
import { IItem } from '../../models/item.model';
import { SuccessAddedModal } from '../UI/SuccessAddedModal';
import { IAddNewWordFormInputs } from './addNewWordForm.interface';
import styles from './AddNewWordForm.module.css';
import { FormInput } from './FormInput';

interface AddNewWordFormProps {
  onAddNewWord: (item: IItem) => void;
}

function AddNewWordForm(props: AddNewWordFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IAddNewWordFormInputs>();

  const [isFormSubmit, setIsFormSubmit] = useState(false);

  const onSubmit: SubmitHandler<IAddNewWordFormInputs> = (data) => {
    const transformedUploadedImage = URL.createObjectURL(data.image[0]);
    const newItem: IItem = {
      id: `${Math.random()}`,
      beTitle: data.beWord,
      ltnTitle: data.ltnWord,
      enTitle: data.enWord,
      imagePath: transformedUploadedImage,
      soundPath: '',
      category: data.category,
    };
    props.onAddNewWord(newItem);
    setIsFormSubmit(true);
  };

  const resetHandler = () => {
    reset();
  };

  const CloseModal = () => {
    reset();
    setIsFormSubmit(false);
  };

  const isFuture = (value: string) => {
    const date = new Date(value);
    const today = new Date();

    if (date.toString() === 'Invalid Date' || date > today) {
      return false;
    }
    return true;
  };

  const isValidTimeframe = (value: string) => {
    const date = new Date(value);
    const checkDate = new Date('2014-12-31');

    if (date.toString() === 'Invalid Date' || date < checkDate) {
      return false;
    }
    return true;
  };

  const isImageFile = (value: FileList) => value[0].type.includes('image/');

  const validationSchemaEnWord = {
    required: FORM_ERROR_MESSAGES.notEmpty,
    minLength: {
      value: 3,
      message: FORM_ERROR_MESSAGES.minLengthWords,
    },
    maxLength: {
      value: 12,
      message: FORM_ERROR_MESSAGES.maxLengthWords,
    },
    pattern: {
      value: /^[^0-9]+$/,
      message: FORM_ERROR_MESSAGES.onlyLettersWords,
    },
  };

  const validationSchemaBeWord = {
    required: FORM_ERROR_MESSAGES.notEmpty,
    minLength: {
      value: 3,
      message: FORM_ERROR_MESSAGES.minLengthWords,
    },
    maxLength: {
      value: 12,
      message: FORM_ERROR_MESSAGES.maxLengthWords,
    },
    pattern: {
      value: /^[^0-9]+$/,
      message: FORM_ERROR_MESSAGES.onlyLettersWords,
    },
  };

  const validationSchemaLtnWord = {
    required: FORM_ERROR_MESSAGES.notEmpty,
    minLength: {
      value: 3,
      message: FORM_ERROR_MESSAGES.minLengthWords,
    },
    maxLength: {
      value: 12,
      message: FORM_ERROR_MESSAGES.maxLengthWords,
    },
    pattern: {
      value: /^[^0-9]+$/,
      message: FORM_ERROR_MESSAGES.onlyLettersWords,
    },
  };

  const validationSchemaDate = {
    required: FORM_ERROR_MESSAGES.notEmpty,
    validate: {
      isFuture: (v: string) => isFuture(v) || FORM_ERROR_MESSAGES.futureDate,
      isValidTimeframe: (v: string) => isValidTimeframe(v) || FORM_ERROR_MESSAGES.validTimeframe,
    },
  };

  const validationSchemaUploadImage = {
    required: FORM_ERROR_MESSAGES.notEmpty,
    validate: {
      isImage: (v: FileList) => isImageFile(v) || FORM_ERROR_MESSAGES.image,
    },
  };

  const validationSchemaConsent = {
    required: FORM_ERROR_MESSAGES.consent,
  };

  return (
    <>
      {isFormSubmit && <SuccessAddedModal onCloseModal={CloseModal} />}
      <div className={styles.formWrapper}>
        <h1>Add a new word</h1>

        <form
          className={styles.form}
          name='newWordForm'
          onSubmit={handleSubmit(onSubmit)}
          onReset={resetHandler}
        >
          <div className={styles.formControls}>
            <FormInput
              register={register}
              name='enWord'
              validationSchema={validationSchemaEnWord}
              error={errors.enWord}
              id={INPUTS[0].id}
              type={INPUTS[0].type}
              label={INPUTS[0].label}
              placeholder={INPUTS[0].placeholder}
              autoComplete='off'
            />

            <FormInput
              register={register}
              name='beWord'
              validationSchema={validationSchemaBeWord}
              error={errors.beWord}
              id={INPUTS[1].id}
              type={INPUTS[1].type}
              label={INPUTS[1].label}
              placeholder={INPUTS[1].placeholder}
              autoComplete='off'
            />

            <FormInput
              register={register}
              name='ltnWord'
              validationSchema={validationSchemaLtnWord}
              error={errors.ltnWord}
              id={INPUTS[2].id}
              type={INPUTS[2].type}
              label={INPUTS[2].label}
              placeholder={INPUTS[2].placeholder}
              autoComplete='off'
            />

            <FormInput
              register={register}
              name='date'
              validationSchema={validationSchemaDate}
              error={errors.date}
              id={INPUTS[3].id}
              type={INPUTS[3].type}
              label={INPUTS[3].label}
            />

            <label htmlFor='category'>Select a category:</label>
            <select id='category' {...register('category')}>
              {CATEGORIES.map((category) => (
                <option key={category} value={category} className={styles.selectOption}>
                  {category}
                </option>
              ))}
            </select>

            <FormInput
              register={register}
              name='image'
              validationSchema={validationSchemaUploadImage}
              error={errors.image}
              id={INPUTS[4].id}
              type={INPUTS[4].type}
              label={INPUTS[4].label}
            />

            <label className={styles.checkboxContainer}>
              I consent to my personal data:
              <input
                type='checkbox'
                {...register('consent', { ...validationSchemaConsent })}
                defaultChecked={false}
              />
              <span className={styles.checkmark} />
            </label>
            <div
              className={
                errors.consent ? `${styles.errorMsg}` : `${styles.errorMsg} ${styles.unvisible}`
              }
            >
              {errors.consent?.message}
            </div>

            <div className={styles.switchContainer}>
              <p>I want to recieve a newsletter:</p>
              <div className={styles.btnSwitch}>
                <input
                  type='radio'
                  id='yes'
                  name='switch'
                  className={`${styles.btnSwitchRadio} ${styles.btnSwitchYes}`}
                />
                <input
                  {...register('newsletter')}
                  type='radio'
                  defaultChecked
                  id='no'
                  name='switch'
                  className={`${styles.btnSwitchRadio} ${styles.btnSwitchNo}`}
                />
                <label
                  htmlFor='yes'
                  className={`${styles.btnSwitchLabel} ${styles.btnSwitchLabelYes}`}
                >
                  <span className={styles.btnSwitchTxt}>Yes</span>
                </label>
                <label
                  htmlFor='no'
                  className={`${styles.btnSwitchLabel} ${styles.btnSwitchLabelNo}`}
                >
                  <span className={styles.btnSwitchTxt}>No</span>
                </label>
              </div>
            </div>
          </div>

          <div className={styles.formActions}>
            <input type='submit' value='Submit' className={styles.formBtns} />
            <input type='reset' value='Reset' className={styles.formBtns} />
          </div>
        </form>
      </div>
    </>
  );
}

export default AddNewWordForm;
