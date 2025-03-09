import { useEffect, useState } from "react";

import { Formik, Form, Field } from "formik";

import * as Yup from "yup";

import Section from "./components/Section/Section";
import Container from "./components/Container/Container";
import Heading from "./components/Heading/Heading";

import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

const formSchema = Yup.object().shape({
  q: Yup.string(),
  w: Yup.string(),
});

function App() {
  const [contactsData, setContactsData] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);

  return (
    <>
      <Section>
        <Container>
          <Heading title="Phonebook" tag="h1" bottom />

          <ContactForm />

          <SearchBox />

          <ContactList contacts={contactsData} />
        </Container>
      </Section>
    </>
  );
}

export default App;
