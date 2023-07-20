import { useState } from 'react';
import css from './form.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';


export const Form = () => {
  const [name, setName] = useState('');
  const [number, setPhone] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  

  const inputChange = e => {
   switch (e.currentTarget.name) {
      case 'name':
        setName(e.currentTarget.value);
        break;
        
      case 'number':
        setPhone(e.currentTarget.value);
        break;
      
      default:
        return;
    }
  }

  const formSumbit = e => {
    e.preventDefault();
const data = {
  name,
  number,
};
if ( contacts.find(
  contact => contact.name.toLowerCase() === data.name.toLowerCase()
))
{
  alert(`You have this Contact.`);
  return;
}

   dispatch(addContact(data))
    reset();
  };
  const reset = () =>{
      setName('');
      setPhone('');
    };

    return (
      <form className={css.form} onSubmit={formSumbit}>
        <label className={css.label}>
          <span className={css.span}>Name</span>
          <input
            className={css.input}
            type="text"
            placeholder="input contact name"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={inputChange}
            required
          />
        </label>
        
        <label className={css.label}>
          <span className={css.span}>Number</span>
          <input
            className={css.input}
            type="tel"
            placeholder="input contact phone"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={inputChange}
            required
          />
        </label>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </form>
    );
}



