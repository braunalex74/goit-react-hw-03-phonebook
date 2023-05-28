import React from 'react';
import { nanoid } from 'nanoid';

import PropTypes from 'prop-types';

import { Container, Title, FilterInput } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import ErrorBoundary from './ErrorBoundary';
import { saveContacts, loadContacts } from './storage';

export class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = loadContacts();
    this.setState({ contacts });
  }

  handleAddContact = (name, number) => {
    const { contacts } = this.state;
    const newContact = { id: nanoid(), name, number };
    const updateContacts = [...contacts, newContact];
    this.setState({ contacts: updateContacts });
    console.log('localStorage available:', !!window.localStorage);
    saveContacts(updateContacts);
  };

  handleDeleteContact = id => {
    const { contacts } = this.state;
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    this.setState({ contacts: updatedContacts });
    saveContacts(updatedContacts);
  };

  handleFilterChange = event => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm
          onAdd={this.handleAddContact}
          contacts={this.state.contacts}
        />

        <h2>Contacts</h2>
        <FilterInput
          type="text"
          value={filter}
          onChange={this.handleFilterChange}
          placeholder="Search contacts..."
        />
        <ErrorBoundary>
          <ContactList
            contacts={filteredContacts}
            onDelete={this.handleDeleteContact}
          />
        </ErrorBoundary>
      </Container>
    );
  }
}

// App.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };
