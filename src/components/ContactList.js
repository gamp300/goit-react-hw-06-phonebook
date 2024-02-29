import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from './Filter.styled';
import { deleteContact } from './contactSlice';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <Button onClick={() => handleDeleteContact(contact.id)}>
            Delete
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
