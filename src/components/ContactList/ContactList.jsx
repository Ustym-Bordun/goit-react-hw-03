import Contact from '../Contact/Contact';

import css from './ContactList.module.css';

const ContactList = ({ contacts, onDelete }) => {
  // console.log(contacts);

  return (
    <ul className={css.list}>
      {contacts.map(contactData => {
        return (
          <li key={contactData.id}>
            <Contact contact={contactData} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
