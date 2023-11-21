import { Contacts, ContactItem, FormButton } from "./Contacts.styled";
import IContactsList from "../../interfaces/ContactsList.interface";

export const ContactList = ({ contactsList, onDelete }: IContactsList) => {
  return (
    <Contacts>
      {contactsList.map((contact) => (
        <ContactItem key={contact.id}>
          <span>{contact.name}: </span>
          <span>{contact.number}</span>
          <FormButton type="button" onClick={() => onDelete(contact.id)}>
            Delete
          </FormButton>
        </ContactItem>
      ))}
    </Contacts>
  );
};
