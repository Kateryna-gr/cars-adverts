import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactsList/ContactList';
import { Filter } from 'components/FilterQuery/Filter';

import styled from 'styled-components';

const Container = styled.div`
  width: 460px;
  margin: 60px auto;
  padding: 20px;
`;

export default function Phonebook() {
  return (
    <Container>
      <h2>Phonebook</h2>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
}
