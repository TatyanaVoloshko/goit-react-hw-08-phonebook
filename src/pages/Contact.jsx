import React from 'react'
import { Form } from 'components/form/Form';
import { Contacts } from 'components/contacts/Contacts';
import { Filter } from 'components/filter/Filter';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { 
  selectError, 
  selectFilteredContacts, 
  selectIsLoading 
} from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

export const Contact = () => {
    const contacts = useSelector(selectFilteredContacts);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchContacts());
    }, [dispatch]);
 
  return (
    <div>
    <h2>Phonebook</h2>
    <Form />
    {isLoading && <p>Loading...</p>}
    {error && <p>{error}</p>}
    <h2>Contacts</h2>
    <Filter/>
   {contacts.length > 0  ? <Contacts /> : <p>Contact not found</p>}
   </div>
  )
}
