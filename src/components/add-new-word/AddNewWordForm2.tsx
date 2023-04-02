import { SubmitHandler, useForm } from 'react-hook-form';
import CATEGORIES from '../../constants/categories';
import FORM_ERROR_MESSAGES from '../../constants/errorMsgs';
import INPUTS from '../../constants/inputs';
import { IItem } from '../../models/item.model';

import { IAddNewWordFormInputs } from './addNewWordForm.interface';
import styles from './AddNewWordForm.module.css';
import { FormInput2 } from './FormInput2';

interface AddNewWordFormProps {
  onAddNewWord: (item: IItem) => void;
}

function AddNewWordForm2(props: AddNewWordFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IAddNewWordFormInputs>({ mode: 'onSubmit' });

  const onSubmit: SubmitHandler<IAddNewWordFormInputs> = (data) => {
    const transformedUploadedImage = URL.createObjectURL(data.image[0]);
    const newItem: IItem = {
      id: Math.random(),
      beTitle: data.beWord,
      ltnTitle: data.ltnWord,
      enTitle: data.enWord,
      imagePath: transformedUploadedImage,
      soundPath: '',
      category: data.category,
    };
    props.onAddNewWord(newItem);
    reset();
  };

  const resetHandler = () => {
    reset();
  };

  const registerEnWord = {
    ...register('enWord', {
      required: FORM_ERROR_MESSAGES.notEmpty,
      minLength: {
        value: 3,
        message: FORM_ERROR_MESSAGES.words,
      },
    }),
  };

  const registerBeWord = {
    ...register('beWord', {
      required: FORM_ERROR_MESSAGES.notEmpty,
      minLength: {
        value: 3,
        message: FORM_ERROR_MESSAGES.words,
      },
    }),
  };

  const registerLtnWord = {
    ...register('ltnWord', {
      required: FORM_ERROR_MESSAGES.notEmpty,
      minLength: {
        value: 3,
        message: FORM_ERROR_MESSAGES.words,
      },
    }),
  };

  const registerDate = {
    ...register('date', {
      required: FORM_ERROR_MESSAGES.notEmpty,
      minLength: {
        value: 3,
        message: FORM_ERROR_MESSAGES.words,
      },
    }),
  };

  const registerUploadImage = {
    ...register('image', {
      required: FORM_ERROR_MESSAGES.notEmpty,
      minLength: {
        value: 3,
        message: FORM_ERROR_MESSAGES.image,
      },
    }),
  };

  return (
    // <>
    <div className={styles.formWrapper}>
      <h1>Add a new word</h1>

      <form
        className={styles.form}
        name='newWordForm'
        onSubmit={handleSubmit(onSubmit)}
        onReset={resetHandler}
      >
        <div className={styles.formControls}>
          <FormInput2
            register={registerEnWord}
            error={errors.enWord}
            id={INPUTS[0].id}
            type={INPUTS[0].type}
            label={INPUTS[0].label}
            placeholder={INPUTS[0].placeholder}
            autoComplete='off'
          />

          <FormInput2
            register={registerBeWord}
            error={errors.beWord}
            id={INPUTS[1].id}
            type={INPUTS[1].type}
            label={INPUTS[1].label}
            placeholder={INPUTS[1].placeholder}
            autoComplete='off'
          />

          <FormInput2
            register={registerLtnWord}
            error={errors.ltnWord}
            id={INPUTS[2].id}
            type={INPUTS[2].type}
            label={INPUTS[2].label}
            placeholder={INPUTS[2].placeholder}
            autoComplete='off'
          />

          <FormInput2
            register={registerDate}
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

          <FormInput2
            register={registerUploadImage}
            error={errors.image}
            id={INPUTS[4].id}
            type={INPUTS[4].type}
            label={INPUTS[4].label}
          />

          <label className={styles.checkboxContainer}>
            I consent to my personal data:
            <input
              type='checkbox'
              {...register('consent', {
                required: FORM_ERROR_MESSAGES.notEmpty,
              })}
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
              <label htmlFor='no' className={`${styles.btnSwitchLabel} ${styles.btnSwitchLabelNo}`}>
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
    // </>
  );
}

export default AddNewWordForm2;
