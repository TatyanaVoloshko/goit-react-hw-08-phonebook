import css from './contacts.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';
import { deleteContact } from 'redux/operations';



export const Contacts = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
   
  return (
    <ul className={css.list}>
      {contacts.map(({ name, id, number }) => (
        <li className={css.item} key={id}>
            <p className={css.text}>
              {name}: {number}
            </p>
            <button
              type="button"
              className={css.button}
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};


