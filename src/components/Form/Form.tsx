import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toJS } from 'mobx';
import cn from 'classnames';
import emailjs from '@emailjs/browser';

import { basketStore } from '../../store/basketStore';
import { Button, Loader } from 'components/index';
import { schemaForm } from 'utils';

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

const YOUR_SERVICE_ID = 'service_7c0ztj8';
const YOUR_TEMPLATE_ID = 'template_47jpln8';
const YOUR_PUBLIC_KEY = 'mm6obt2InRo6BZElU';

export function Form({ onClose }: IFormProps) {
  const [loading, setLoading] = useState(false);
  const { items } = basketStore;

  useEffect(() => emailjs.init(YOUR_PUBLIC_KEY), []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm<IForm>({
    mode: 'onChange',
    resolver: yupResolver(schemaForm),
  });

  const onSubmit: SubmitHandler<IForm> = async () => {
    const itemInBasket = toJS(items);
    const emailData = {
      firstName: getValues('firstName'),
      lastName: getValues('lastName'),
      phoneNumber: getValues('phoneNumber'),
      content: getValues('content'),
      ...itemInBasket,
    };
    // console.log('emailData', JSON.stringify(emailData));

    try {
      setLoading(true);

      const response = await emailjs.send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, {
        firstName: getValues('firstName'),
        lastName: getValues('lastName'),
        phoneNumber: getValues('phoneNumber'),
        // table:
        // table: tableContent,
        // article: itemInBasket[0].article,
        // name: itemInBasket[0].name,
        // size: itemInBasket[0].selectedSize,
        // price: itemInBasket[0].price,
        // quantity: itemInBasket[0].selectedQuantity,
        // totalPrice: itemInBasket[0].orderPrice,
      });

      console.log('response', response.status);
      console.log('response', response);

      alert('email successfully sent check inbox');
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }

    if (!onClose) return;
    onClose();
    reset();
  };

  return (
    <>
      {loading && <Loader />}
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
