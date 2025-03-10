import { useEffect, useState } from 'react';

import Section from './components/Section/Section';
import Container from './components/Container/Container';
import Heading from './components/Heading/Heading';
import Notification from './components/Notification/Notification';

import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';

const initialContactsData = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

function App() {
  const [contactsData, setContactsData] = useState(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));

    return savedContacts !== null ? savedContacts : initialContactsData;
  });

  const [filterRequest, setFilterRequest] = useState('');
  const visibleContactsData = contactsData.filter(contact =>
    contact.name.toLowerCase().includes(filterRequest.trim().toLowerCase())
  );

  const handleAddContact = newContact => {
    // console.log(newContact);
    setContactsData(prev => [...prev, newContact]);
  };

  const handleDeleteContact = contactIdToDelete => {
    setContactsData(
      contactsData.filter(contact => contact.id !== contactIdToDelete)
    );
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contactsData));
  }, [contactsData]);

  // { name: '', number: '' }

  return (
    <>
      <Section>
        <Container>
          <Heading title="Phonebook" tag="h1" bottom />

          <ContactForm onAddContact={handleAddContact} />

          <SearchBox filterValue={filterRequest} onFilter={setFilterRequest} />

          {contactsData.length !== 0 ? (
            <ContactList
              contacts={visibleContactsData}
              onDelete={handleDeleteContact}
            />
          ) : (
            <Notification text="You don't have any contacts saved" />
          )}
        </Container>
      </Section>
    </>
  );
}

export default App;
