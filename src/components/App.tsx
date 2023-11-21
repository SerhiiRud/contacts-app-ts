import { useState, useEffect } from "react";
import initialContacts from "../contacts.json";
import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout/Layout";
import { ContactForm } from "./Phonebook/Phonebook";
import { ContactList } from "./Contacts/Contacts";
import { Filter } from "./Filter/Filter";
import IContact from "../interfaces/Contact.interface";

const getInitialContacts = () => {
  const savedContacts = localStorage.getItem("contacts");
  if (savedContacts !== null) {
    return JSON.parse(savedContacts);
  } else {
    return initialContacts;
  }
};

export const App = () => {
  const [contacts, setContacts] = useState<IContact[]>(getInitialContacts);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact: IContact) => {
    if (
      contacts.find(
        (contact) =>
          contact.name.toLocaleLowerCase() ===
          newContact.name.toLocaleLowerCase()
      )
    ) {
      return alert(`${newContact.name} is already in contacts`);
    }
    setContacts([...contacts, newContact]);
  };

  const onInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  const onSearchList = () =>
    [...contacts].filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  const onDelete = (id: string) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <h2>Contacts</h2>
      <Filter onSearch={onInput} />
      <ContactList contactsList={onSearchList()} onDelete={onDelete} />
      <GlobalStyle />
    </Layout>
  );
};
