import Contact from 'components/Contact/Contact';
export const ContactList = ({ contacts, filter, deleteItem }) => (
  <ul>
    {contacts
      .filter(contact =>
        contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
      )
      .map(contact => (
        <Contact contact={contact} deleteItem={deleteItem} key={contact.id} />
      ))}
  </ul>
);
