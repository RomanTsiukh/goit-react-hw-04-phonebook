import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Box } from '../Box';
import * as yup from 'yup';
import { Error, ButtonAddContact } from './ContactForm.styled';

const nameError = 'Invalid name';
const numberError = 'Invalid number';
const requiredError = 'This field is required';

const schema = yup.object().shape({
  name: yup
    .string()
    .required(requiredError)
    .matches(
      "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
      nameError
    ),
  number: yup
    .string()
    .required(requiredError)
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      numberError
    ),
});

const initialValue = {
  name: '',
  number: '',
};

const ContactForm = ({ onSubmit }) => {
  return (
    <Formik initialValues={initialValue} validationSchema={schema}>
      <Form onSubmit={onSubmit}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={3}
        >
          <h3>Name</h3>
          <Field
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Box>
        <ErrorMessage name="name" render={msg => <Error>{nameError}</Error>} />
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <h3>Number</h3>
          <Field
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Box>
        <ErrorMessage
          name="number"
          render={msg => <Error>{numberError}</Error>}
        />
        <ButtonAddContact type="submit">Add contact</ButtonAddContact>
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
