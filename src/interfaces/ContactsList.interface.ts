import IContact from "./Contact.interface";

export default interface IContactsList {
  contactsList: IContact[];
  onDelete: (id: string) => void;
}
