import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Contacts } from './Filter.styled';
import { setFilter } from './contactSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div>
      <Contacts>
        Buscar contactos por nombre
        <input type="text" value={filter} onChange={handleFilterChange} />
      </Contacts>
    </div>
  );
};

export default Filter;
