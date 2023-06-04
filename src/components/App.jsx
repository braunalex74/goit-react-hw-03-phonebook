import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';

import PropTypes from 'prop-types';

import initialContacts from '../components/storage.json';
import { Container, Title, FilterInput } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = (name, number) => {
    const newContact = { id: nanoid(), name, number };

    const isDuplicate = contacts.some(
      contact =>
        contact.name.toLowerCase().trim() === name.toLowerCase().trim() ||
        contact.number.trim() === number.trim()
    );

    if (isDuplicate) {
      toast.error(`${name} is already in contacts`);
    } else {
      setContacts(prevContacts => [newContact, ...prevContacts]);
    }
  };

  const handleDeleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm onAdd={handleAddContact} contacts={contacts} />

      <h2>Contacts</h2>
      <FilterInput
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Search contacts..."
      />

      {/* Додайте компонент ContactList з необхідними пропсами */}
      <ContactList contacts={filteredContacts} onDelete={handleDeleteContact} />

      <ToastContainer />
    </Container>
  );
};

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default App;
