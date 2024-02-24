import { ErrorMessage, Field, Formik } from 'formik';
import * as Yup from 'yup';
import {
  ButtonContainer,
  StyledButton,
  StyledForm,
} from 'components/ContactForm/ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

const ContactSchema = Yup.object().shape({
  name: Yup.string('Invalid name').required('Enter name'),
  number: Yup.number('Invalid phone').required('Enter phone'),
});

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleAddContact = values => {
    let check = contacts.find(contact => contact.name === values.name);
    if (check) {
      alert(`${values.name} is already in contacts`);
      return;
    }

    dispatch(addContact([values.name, values.number]));
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={ContactSchema}
      onSubmit={(values, actions) => {
        handleAddContact(values);
        actions.resetForm();
      }}
    >
      <StyledForm>
        <label>
          <p>Name</p>
          <Field type="text" name="name" required />
          <ErrorMessage name="name" component="div" />
        </label>
        <label>
          <p>Number</p>
          <Field type="tel" name="number" required />
          <ErrorMessage name="number" component="div" />
        </label>
        <ButtonContainer>
          <StyledButton variant="contained" type="submit">
            Add contact
          </StyledButton>
        </ButtonContainer>
        <ButtonContainer />
      </StyledForm>
    </Formik>
  );
};
