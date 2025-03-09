import Contact from "../Contact/Contact";

import css from "./ContactList.module.css";

const ContactForm = ({ contacts }) => {
  // console.log(contacts);
  return (
    <>
      <p>ContactForm</p>

      {/* {contacts.map((contact) => {
        return <Contact contact={contact} />;
      })} */}

      <Contact />
    </>
  );
};

export default ContactForm;
