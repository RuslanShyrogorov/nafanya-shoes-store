import React, { useRef } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toJS } from 'mobx';
import cn from 'classnames';
import { Button } from 'components/index';
import { basketStore } from '../../store/basketStore';

import s from './Form.module.scss';
import { schemaForm } from 'utils';

interface IForm {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  content?: string;
}

interface IFormProps {
  onClose?: () => void;
}

export function Form({ onClose }: IFormProps) {
  const form = useRef<HTMLFormElement | null>(null);
  const { items } = basketStore;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IForm>({
    mode: 'onChange',
    resolver: yupResolver(schemaForm),
  });

  const onSubmit: SubmitHandler<IForm> = (data) => {
    const ItemInBasket = toJS(items);

    const toMail = { ...data, ...ItemInBasket };
    console.log(toMail);
    //==============================
    // const sendEmail = () => {
    //   emailjs
    //     .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', toMail, {
    //       publicKey: 'YOUR_PUBLIC_KEY',
    //     })
    //     .then(
    //       () => {
    //         console.log('SUCCESS!');
    //       },
    //       (error) => {
    //         console.log('FAILED...', error.text);
    //       }
    //     );
    // };

    // =============================
    if (onClose) {
      onClose();
    }
    reset();
  };

  // const sendEmail = (e) => {
  //   e.preventDefault();
  //
  //   emailjs
  //     .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
  //       publicKey: 'YOUR_PUBLIC_KEY',
  //     })
  //     .then(
  //       () => {
  //         console.log('SUCCESS!');
  //       },
  //       (error) => {
  //         console.log('FAILED...', error.text);
  //       }
  //     );
  // };

  return (
    <>
      <form ref={form} className={s.form} onSubmit={handleSubmit(onSubmit)}>
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
              placeholder='+38 0XX XXX XX XX'
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
