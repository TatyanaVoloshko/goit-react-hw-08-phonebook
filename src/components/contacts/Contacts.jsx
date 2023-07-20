import css from './contacts.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';
import { deleteContact } from 'redux/operations';
import DeleteIcon from '@mui/icons-material/Delete';



export const Contacts = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
   
  return (
    <ul>
      {contacts.map(({ name, id, number }) => (
        <li className={css.item} key={id}>
            <p className={css.text}>
              {name}: {number}
              <DeleteIcon color="primary"
              type="button"
              className={css.button}
              onClick={() => dispatch(deleteContact(id))}
            />
            </p>
          
          </li>
        ))}
    </ul>
  );
};


