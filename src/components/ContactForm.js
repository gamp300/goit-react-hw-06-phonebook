import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { Button, Label } from './Filter.styled';
import { addContact } from './contactSlice';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleAddContact = () => {
    if (name.trim() === '' || number.trim() === '') {
      alert('Por favor, ingrese tanto el nombre como el número.');
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    dispatch(addContact(newContact));

    setName('');
    setNumber('');
  };

  return (
    <div>
      <Label>
        Name
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </Label>

      <Label>
        Number
        <input
          type="text"
          value={number}
          onChange={e => setNumber(e.target.value)}
        />
      </Label>

      <Button onClick={handleAddContact}>Add Contact</Button>
    </div>
  );
};

export default ContactForm;
