import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { FilterContainer } from './Filter.styled';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <FilterContainer>
          <h1>Agenda Telefónica</h1>
          <ContactForm />
          <h2>Contactos</h2>
          <ContactList />
          <Filter />
        </FilterContainer>
      </div>
    </Provider>
  );
};

export default App;
