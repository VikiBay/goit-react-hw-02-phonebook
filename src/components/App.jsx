import { Component } from 'react';
import shortid from 'shortid';
import {ContactForm} from './ContactForm/ContactForm'
import {ContactList} from './ContactList/ContactList'
import {Filter} from './Filter/Filter'


export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    name: '',
    filter:''
  }

  ContactFormSubmitHandler = data => {
      const contact = {
      id: shortid.generate(),
      ...data
    }
    console.log("contact",contact)
    
    this.setState(prevState =>(
      {contacts: [contact, ...prevState.contacts]}
    ))
  }

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
      }

      changeFilter = event =>{
        this.setState({
          filter: event.currentTarget.value
        })
      }

      getFilteredContacts = () =>{
        const normalizedFilter  =this.state.filter.toLowerCase();
    
        return this.state.contacts.filter(contact =>
          contact.name.toLowerCase().includes(normalizedFilter),
          )
      }

  render(){

    const filteredContacts = this.getFilteredContacts();

  return (
    <div
      style={{
        padding: '10px 50px',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'left',
        fontSize: 30,
        color: '#010101'
      }}
    >
<h1>Phonebook</h1>
<ContactForm onSubmitProp = {this.ContactFormSubmitHandler}/>
<h2>Contacts</h2>
  <Filter value={this.state.filter} onChange={this.changeFilter}/>
  <ContactList contacts={filteredContacts} onDeleteContact={this.deleteContact}/>
    </div>
  );
    }
};
