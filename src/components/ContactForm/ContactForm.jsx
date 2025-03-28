import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

const ContactForm = ({ setContacts }) => {
  const initialValues = { name: '', number: '' };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    number: Yup.string().required('Number is required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    setContacts(prev => [...prev, { ...values, id: nanoid() }]);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.formContainer}>
        <Field name="name" type="text" placeholder="Name" className={css.field} />
        <ErrorMessage name="name" component="div" className={css.errorMessage} />

        <Field name="number" type="text" placeholder="Number" className={css.field} />
        <ErrorMessage name="number" component="div" className={css.errorMessage} />

        <button type="submit" className={css.submitBtn}>Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
