import PropTypes from 'prop-types';
import {
  Wrapper,
  ContactListItem,
  ContactListText,
  ContactListButton,
} from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => (
  <Wrapper>
    {contacts.map(({ id, name, number }) => (
      <ContactListItem key={id}>
        <ContactListText>{name}: </ContactListText>
        <ContactListText>{number}: </ContactListText>
        <ContactListButton onClick={() => onDeleteContact(id)}>
          Delete
        </ContactListButton>
      </ContactListItem>
    ))}
  </Wrapper>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
