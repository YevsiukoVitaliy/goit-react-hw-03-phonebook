import './App.css';
import ContactForm from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from './components/ContactList/ContactList';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleFilterTextChange = filterText => {
    this.setState({
      filter: filterText.target.value,
    });
  };

  handleSubmit = ({ name, number }) => {
    if (
      this.state.contacts.find(
        contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
      )
    ) {
      return alert(`dssd`);
    }
    this.setState({
      contacts: [
        ...this.state.contacts,
        {
          name: name,
          number: number,
          id: nanoid(),
        },
      ],
    });
  };
  deleteItem = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(el => el.id !== id),
    }));
  };
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(contacts);
    this.setState({ contacts: parseContacts });
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  render() {
    const { filter, contacts } = this.state;
    const { handleSubmit, handleFilterTextChange, deleteItem } = this;

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={handleSubmit} />
        <h2>Contacts</h2>
        <Filter
          filter={filter}
          handleFilterTextChange={handleFilterTextChange}
        />
        <ContactList
          contacts={contacts}
          filter={filter}
          deleteItem={deleteItem}
        />
      </>
    );
  }
}
App.propTypes = {
  filter: PropTypes.string,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onHandleSubmit: PropTypes.func,
  handleFilterTextChange: PropTypes.func,
  deleteItem: PropTypes.func,
};
