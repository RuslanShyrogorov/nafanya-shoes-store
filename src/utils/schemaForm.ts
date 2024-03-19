import * as yup from 'yup';

const schemaForm = yup
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
      .matches(/^\+?3?8 ?\(?\d{3}\)? ?\d{3} ?\d{2} ?\d{2}$/, '8 0XX XXX XX XX')
      .required("Обовя'зкове поле"),
    content: yup.string().trim().max(250),
  })
  .required();

export default schemaForm;
