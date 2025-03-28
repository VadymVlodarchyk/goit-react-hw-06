import React from 'react';
import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import css from './Contact.module.css';

const Contact = ({ contact, onDelete }) => (
  <li className={css.contactItem}>
    <div className={css.contactInfo}>
      <div className={css.contactDetails}>
        <p className={css.contactName}>
          <FaUser style={{ marginRight: '6px' }}/> 
          {contact.name}
        </p>
        <div className={css.contactNumber}>
          <FaPhoneAlt />
          <span>{contact.number}</span>
        </div>
      </div>
    </div>
    <button className={css.delete} onClick={() => onDelete(contact.id)}>
      Delete
    </button>
  </li>
);

export default Contact;
