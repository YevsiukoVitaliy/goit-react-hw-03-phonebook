export default function Contact({ contact, deleteItem }) {
  return (
    <li style={{ width: '275px', display: 'flex' }} id={contact.id}>
      {contact.name}: {contact.number}
      <button
        onClick={() => {
          deleteItem(contact.id);
        }}
        style={{ marginLeft: 'auto' }}
        type="button"
      >
        Delete
      </button>
    </li>
  );
}
