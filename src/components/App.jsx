import React from 'react';
import styled from 'styled-components';
import './GlobalStyle';
import { nanoid } from 'nanoid';
import { Box } from './Box';
import { Section } from 'components/Section/Section';
import ContactForm from './ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';

import Filter from 'components/Filter/Filter';

const Title = styled.h1`
  text-align: center;
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  margin-top: ${p => p.theme.space[0]}px;
  margin-bottom: ${p => p.theme.space[0]}px;
`;

class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const number = e.target.number.value;
    const addedContact = { id: nanoid(), name, number };

    const auditContact = this.state.contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    auditContact
      ? alert(`Sorry, ${name} is already in your contacts`)
      : this.setState(prevState => ({
          contacts: [addedContact, ...prevState.contacts],
        }));

    e.target.reset();
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    console.log(parsedContacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts)
      console.log('Обновиось поле contacts');
    // console.log(prevState);
    // console.log(this.state);
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  render() {
    return (
      <Box
        bg="firstBgColor"
        color="mainTextColor"
        p={4}
        pl={5}
        pr={5}
        width="360px"
        fontFamily="Ubuntu"
        fontSize={16}
        border="2px solid"
        borderRadius={16}
      >
        <Title>Phonebook</Title>
        <Section>
          <ContactForm onSubmit={this.handleSubmit} />
        </Section>

        <Section title="Contacts">
          <Filter value={this.state.filter} onChange={this.changeFilter} />
          <ContactList
            contacts={this.getVisibleContacts()}
            onDeletContact={this.deleteContact}
          />
        </Section>
      </Box>
    );
  }
}

export default App;
