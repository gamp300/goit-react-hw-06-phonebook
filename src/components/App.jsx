import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './store';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { FilterContainer } from './Filter.styled';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div>
          <FilterContainer>
            <h1>Agenda Telefónica</h1>
            <ContactForm />
            <h2>Contactos</h2>
            <ContactList />
            <Filter />
          </FilterContainer>
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;
