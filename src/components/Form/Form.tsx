import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toJS } from 'mobx';
import cn from 'classnames';
import emailjs from '@emailjs/browser';
import * as process from 'process';

import { basketStore } from '../../store/basketStore';
import { Button, Loader } from 'components/index';
import { attachmentEmail, schemaForm } from 'utils';

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

const YOUR_SERVICE_ID: string = process.env.REACT_APP_YOUR_SERVICE_ID as string;
const YOUR_TEMPLATE_ID: string = process.env
  .REACT_APP_YOUR_TEMPLATE_ID as string;
const YOUR_PUBLIC_KEY = process.env.REACT_APP_YOUR_PUBLIC_KEY as string;

export function Form({ onClose }: IFormProps) {
  const [loading, setLoading] = useState(false);
  const { items, totalItems, totalPrice } = basketStore;

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

    try {
      setLoading(true);
      const itemAttachment2 = itemInBasket.map((item, index) =>
        attachmentEmail(item, index)
      );
      const response = await emailjs.send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, {
        firstName: getValues('firstName'),
        lastName: getValues('lastName'),
        phoneNumber: getValues('phoneNumber'),
        order1: itemAttachment2[0],
        order2: itemAttachment2[1],
        order3: itemAttachment2[2],
        order4: itemAttachment2[3],
        order5: itemAttachment2[4],
        order6: itemAttachment2[5],
        totalItems,
        totalPrice,
        content: getValues('content'),
      });

      if (response.status === 200) {
        alert('Дякуємо, замовлення оформлено!. Чекайте на дзвінок оператора.');
      }
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
            disabled={loading}
          >
            Відправити
          </Button>
        </div>
      </form>
    </>
  );
}
