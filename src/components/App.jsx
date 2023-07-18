import css from './App.module.css';
import { Form } from './form/Form';
import { Contacts } from './contacts/Contacts';
import { Filter } from './filter/Filter';

import { useDispatch, useSelector } from 'react-redux';
import { 
  selectError, 
  selectFilteredContacts, 
  selectIsLoading 
} from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';


export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  
useEffect(() => {
dispatch(fetchContacts())
}, [dispatch]);

  return (
      <div className={css.App}>
        <h2>Phonebook</h2>
        <Form />
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <h2>Contacts</h2>
        <Filter/>
       {contacts.length > 0  ? <Contacts /> : <p>Contact not found</p>}
      </div>
    );
  };

 

  