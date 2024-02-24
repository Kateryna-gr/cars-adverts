import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { ButtonContainer, ButtonDelete } from './ContactItem.styled';

export const Contact = ({ name, phone, id }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = id => dispatch(deleteContact(id));

  return (
    <div>
      {name} - {phone}
      <ButtonContainer>
        <ButtonDelete
          variant="outlined"
          size="small"
          onClick={() => handleDeleteContact(id)} >
          Delete
        </ButtonDelete>
      </ButtonContainer>
    </div>
  );
};
