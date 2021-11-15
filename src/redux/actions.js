import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';
import { ADD_CONTACT, DELETE_CONTACT, FILTER_CONTACT } from './actions-types';

//--- Via 'toolkit' ---

export const addContact = createAction(ADD_CONTACT, text => {
  return {
    payload: {
      id: shortid.generate(),
      ...text,
      completed: false,
    },
  };
});

export const filterContact = createAction(FILTER_CONTACT);

export const deleteContact = createAction(DELETE_CONTACT);

// -----------------------------------------------
//--- Via 'redux' ---

// export function addContact(text) {
//   return { type: ADD_CONTACT, payload: { id: shortid.generate(), ...text } };
// }

// export function filterContact(name) {
//   return { type: FILTER_CONTACT, payload:  name  };
// }

// export function deleteContact(id) {
//   return { type: DELETE_CONTACT, payload: id };
// }

// ----------------------------------------------
