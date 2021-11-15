import React from 'react';
import { connect } from 'react-redux';
import { deleteContact } from '../../redux/actions';

import s from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContacts }) => (
  <ul className={s.contacts}>
    {contacts.map(({ id, name, number }) => (
      <li className={s.item} key={id}>
        <p className={s.name}>{name}</p>
        <p className={s.tel}>{number}</p>
        <button className={s.btnDel} onClick={() => onDeleteContacts(id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

// --- Search  by filter ---

const getVisibleContacts = (allContacts, filter) => {
  const normalizeFilter = filter.toLowerCase();

  console.log(allContacts);

  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter),
  );
};

const mapStateToProps = state => ({
  contacts: getVisibleContacts(state.contacts.items, state.contacts.filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContacts: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

//------------------------------------------------
// --- Another variant mapStateToProps ---

// const mapStateToProps = state => {
//   const { filter, items } = state;
//   const visibleContacts = getVisibleContacts(items, filter);

//   return { contacts: visibleContacts };
// };
//------------------------------------------------
