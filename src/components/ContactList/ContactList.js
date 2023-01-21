import {Wrapper, ContactListItem, ContactListText, ContactListButton} from './ContactList.styled'

export const ContactList = ({contacts, onDeleteContact}) => (
    <Wrapper>
        {contacts.map(({id, name, number}) => 
        <ContactListItem key={id}>
            <ContactListText>{name}: </ContactListText>
            <ContactListText>{number}: </ContactListText>
            <ContactListButton onClick={() => onDeleteContact(id)}>Delete</ContactListButton>
            </ContactListItem>)}
    </Wrapper>
)