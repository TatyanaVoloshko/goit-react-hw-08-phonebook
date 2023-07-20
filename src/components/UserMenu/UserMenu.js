import { useDispatch } from 'react-redux';

import { logOut } from 'redux/auth/authOperations';
import css from './UserMenu.module.css'
import WavingHandIcon from '@mui/icons-material/WavingHand';


export const UserMenu = () => {
  const dispatch = useDispatch();
  
 
  return (
    <div className={css.userMenu}>
      <div className={css.text}>Welcome in your contact book<WavingHandIcon className={css.icon}/></div>
      <button type="button" onClick={() => dispatch(logOut())} className={css.button}>
        Logout
      </button>
    </div>
  )
};
