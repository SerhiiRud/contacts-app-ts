import IContact from "./Contact.interface";

export default interface IPhonebook {
  onAddContact: (newContact: IContact) => void;
}
