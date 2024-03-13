import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { toJS } from 'mobx';
import cn from 'classnames';

import { Button } from 'components/index';
import { basketStore } from '../../store/basketStore';

import s from './Form.module.scss';

interface IForm {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  content?: string;
}

interface IFormProps {
  onClose?: () => void;
}

const schema = yup
  .object()
  .shape({
    firstName: yup
      .string()
      .trim()
      .matches(/^([^0-9]*)$/, 'Тільки букви!')
      .required("Обовя'зкове поле"),
    lastName: yup
      .string()
      .trim()
      .matches(/^([^0-9]*)$/, 'Тільки букви!')
      .required("Обовя'зкове поле"),
    phoneNumber: yup
      .string()
      .trim()
      .matches(/^\+?3?8 ?\(?\d{3}\)? ?\d{3} ?\d{2} ?\d{2}$/, '8 0xx xxx xx xx')
      .required("Обовя'зкове поле"),
    content: yup.string().trim().max(250),
  })
  .required();

export function Form({ onClose }: IFormProps) {
  const { items } = basketStore;
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IForm>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IForm> = (data) => {
    const ItemInBasket = toJS(items);

    const toMail = { ...data, ...ItemInBasket };
    console.log(toMail);
    if (onClose) {
      onClose();
    }
    reset();
  };

  return (
    <>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <h2 className={s.formTitle}>Оформіть замовлення</h2>
        <div className={s.formContent}>
          <label className={cn(s.formItem)}>
            <p className={s.formLabelText}>
              Ім&apos;я
              <span>*</span>
            </p>
            <input
              className={cn(s.formInput, {
                [s.formInputError]: errors.firstName,
              })}
              type='text'
              {...register('firstName')}
            />
            {errors?.lastName && (
              <p className={s.formErrorText}>{errors.firstName?.message}</p>
            )}
          </label>
          <label className={s.formItem}>
            <p className={s.formLabelText}>
              Прізвище
              <span>*</span>
            </p>
            <input
              className={cn(s.formInput, {
                [s.formInputError]: errors.lastName,
              })}
              type='text'
              {...register('lastName')}
            />
            {errors?.lastName && (
              <p className={s.formErrorText}>{errors.lastName?.message}</p>
            )}
          </label>
          <label className={s.formItem}>
            <p className={s.formLabelText}>
              Телефон
              <span>*</span>
            </p>
            <input
              className={cn(s.formInput, {
                [s.formInputError]: errors.phoneNumber,
              })}
              type='tel'
              {...register('phoneNumber')}
              placeholder='+38 0xx xxx xx xx'
            />
            {errors?.lastName && (
              <p className={s.formErrorText}>{errors.phoneNumber?.message}</p>
            )}
          </label>
          <label className={s.formItem}>
            <textarea
              placeholder='Додаткова інформація'
              {...register('content')}
            />
            <p className={s.formErrorText}>{errors.content?.message}</p>
          </label>
          <Button
            className={s.formButton}
            type={'submit'}
            variant={'contained'}
            // disabled={!isValid}
          >
            Відправити
          </Button>
        </div>
      </form>
    </>
  );
}
